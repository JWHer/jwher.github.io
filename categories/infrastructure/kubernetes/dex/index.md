---
authors:
- jwher
description: 'Dex: OpenID 커넥터'
slug: dex
tags:
  - kubernetes
  - security
  - authentication
title: Dex
---

![dex](/img/logos/dex.svg)
*자원에 OpenID 인증을 제공하는 방법*  
<!--truncate-->

# 목차
* [Dex](#dex)
* [로컬 예제](#로컬-예제)

<br/>

## Dex  

### 사전지식

<p align="center">
<img src="/assets/img/dex/social-icons.gif"/>
</p>

웹서비스를 이용하다 보면 다양한 소셜 계정으로 로그인할 수 있습니다.
이는 각각 **[인가(authorization)](https://ko.wikipedia.org/wiki/%EC%9D%B8%EA%B0%80)**
와 **[인증(authentication)](https://ko.wikipedia.org/wiki/%EC%9D%B8%EC%A6%9D)**
을 제공하는 **OAuth2.0**과 **OIDC**를 사용해 구현됩니다.

> <div align="center">
> ![oauth](/img/logos/oauth.svg)
> ![open-id](/img/logos/open-id.svg)
> 갑자기 이게 뭐죠😵
> </div>

### OAuth2.0  
OAuth(Open Authorization)는 **엑세스 권한**을 확인하는 [개방형 표준](https://ko.wikipedia.org/wiki/%EA%B0%9C%EB%B0%A9%ED%98%95_%ED%91%9C%EC%A4%80) 입니다.
권한이 있는 사용자가 **서드파티 애플리케이션**을 사용해 자원에 접근하기 위해서,
이전까지는 페이스북과 같은 idP(identity Providers)의 **패스워드**를 넘겨 권한을 확인했으나,
OAuth는 패스워드 없이 **엑세스 토큰**을 넘겨 권한을 확인합니다.  
  
*엑세스 토큰은 대게 JWT(JSON Web Token)를 쿠키로 사용합니다*  

[RFC6749(OAuth 2.0)](https://www.ietf.org/rfc/rfc6749.txt)  
[RFC7519(JWT)](https://www.ietf.org/rfc/rfc7519.txt)  

### OIDC  
OIDC(OpenID Connect)는 OAuth2.0 인가를 기반으로 한 인증입니다.
OIDC를 사용해 인증된 세션과 **사용자 정보**를 요청/수신할 수 있습니다.
OIDC는 JSON 데이터 형식으로 RESTful HTTP API를 지원하고 확장 가능합니다.
OAuth2.0 권한 서버인 **OIDC 제공자(OP, OIDC Provider)** 가
인증이 필요한 **신뢰 당사자(RPs, Relying Parties)** 에 소유권을 입증해줍니다.
이는 주로 [통합 인증(SSO, Single Sign-On)](https://ko.wikipedia.org/wiki/%ED%86%B5%ED%95%A9_%EC%9D%B8%EC%A6%9D)
을 위해 사용됩니다.

<details markdown="1">
<summary>OIDC JSON</summary>

```json
{
  "iss": "http://127.0.0.1:5556/dex",
  "sub": "CgcyMzQyNzQ5EgZnaXRodWI",
  "aud": "example-app",
  "exp": 1492882042,
  "iat": 1492795642,
  "at_hash": "bi96gOXZShvlWYtal9Eqiw",
  "email": "jane.doe@coreos.com",
  "email_verified": true,
  "groups": [
    "admins",
    "developers"
  ],
  "name": "Jane Doe"
}
```
</details>
  
[[삼성]OIDC](https://www.samsungsds.com/kr/insights/oidc.html)  
[RFC6750(OAuth 2.0 Authorization Framework)](https://www.ietf.org/rfc/rfc6750.txt)  
[[공식]OIDC Implementer's Guide](https://openid.net/specs/openid-connect-basic-1_0.html#CodeFlow)  

> 소셜 로그인이 이렇게 복잡했군요 😅

<br/>

### Dex
<br/>

> <p align="center">
> <img src="/assets/img/dex/dex-workflow.png"/><br/>
> 간략화된 흐름도
> </p>
<details markdown="1">
<summary>자세한 흐름</summary>
<p align="center">
<img src="/assets/img/dex/oidc_authservice_sequence_diagram.svg" alt="oidc_authservice_sequence_diagram"/>
</p>
쿠버네티스에서 동작하는 흐름입니다.  
라우터로 Istio를 사용하고 인증 시스템이 완전히 없는 Client App 사이에 미들웨어로 AuthService가 들어갑니다.
</details>

Dex는 OIDC의 구현으로 여러 idP의 커넥터(인터페이스)와 연결해 인증처리를 중앙화(Federate)하고,
서드파티 애플리케이션에 인증을 제공합니다.
여기서 idP는 [LDAP](https://ko.wikipedia.org/wiki/LDAP),
[SAML](https://ko.wikipedia.org/wiki/SAML) 또는 GitHub, Google, Naver 등 존재하는 idP일수 있습니다.

<br/>

## 로컬 예제
<br/>

### 요구사항
* [고](https://jwher.github.io/golang-setup) 1.15 버전 이상
<!-- * 또는 [도커](https://jwher.github.io/install-docker) -->
<br/>

### 바이너리

[[깃헙]Dex](https://github.com/dexidp/dex) 에서 덱스 소스를 클론합니다.
```shell
$ git clone https://github.com/dexidp/dex.git
$ cd dex/
$ make build
```
<br/>

[예제 설정](https://github.com/dexidp/dex/blob/master/examples/config-dev.yaml)
을 사용해 실행합니다. (`examples/` 디렉토리에 있습니다)
```shell
./bin/dex serve examples/config-dev.yaml
```
예제 설정의 이메일은 `admin@example.com` 패스워드는 `password`입니다.
(설청에는 bcrypt hash 값이 들어갑니다.)  

<br/>

이제 덱스 OIDC 인증을 테스트할 수 있는 예제 클라이언트 앱을 실행합니다.
```shell
$ make examples
$ ./bin/examples-app
```
<br/>

예제 클라이언트 앱에 덱스로 로그인하는 절차는 다음과 같습니다.
<p>1. http://localhost:5555/ 의 예제 클라이언트로 이동합니다.</p>  
<br/>
<p align="center">
<img src="/assets/img/dex/example-login.png" alt="example-login"/>
</p>
<p>2. `login` 버튼을 누릅니다. (여러 입력창이 있지만 아무것도 입력하지 않아도 됩니다)</p>

*주의! 현재 버그가 있는 것으로 보입니다(21.08.12) 이동하는 링크
(http://127.0.0.1:5556/dex/auth?...)
의 `127.0.0.1`을 `localhost`로 변경해야 정상적으로 동작합니다.*
<br/>
<p markdown="1">3. `examples/config-dev.yaml`에 설정한 이메일과 패스워드를 입력합니다. (`admin@example.com`, `password`)</p>
<br/>
<p align="center">
<img src="/assets/img/dex/example-grant.png" alt="example-grant"/>
</p>
<p>4. 예제 앱 요청을 승인합니다.</p>
<br/>
<p align="center">
<img src="/assets/img/dex/example-token.png" alt="example-token"/>
</p>
<p>5. 예제 앱이 덱스에 요구하는 token을 확인합니다.</p>
<br/>

### LDAP

LDAP config입니다. 나중에 글을 보완하겠습니다.  
[[공식]Authentication Through LDAP](https://dexidp.io/docs/connectors/ldap/)
<details markdown="1">
<summary>ldap.yaml</summary>

```yaml
issuer: http://127.0.0.1:5556/dex
storage:
  type: sqlite3
  config:
    file: examples/dex.db
web:
  http: 0.0.0.0:5556

connectors:
- type: ldap
  name: OpenLDAP
  id: ldap
  config:
    # The following configurations seem to work with OpenLDAP:
    #
    # 1) Plain LDAP, without TLS:
    host: your-ldap-address:389
    insecureNoSSL: true
    
    # 2) LDAPS without certificate validation:
    #host: localhost:636
    #insecureNoSSL: false
    #insecureSkipVerify: true
  
    # 3) LDAPS with certificate validation:
    #host: YOUR-HOSTNAME:636
    #insecureNoSSL: false
    #insecureSkipVerify: false
    #rootCAData: 'CERT'
    # ...where CERT="$( base64 -w 0 your-cert.crt )"

    # This would normally be a read-only user.
    bindDN: cn="",dc="",dc="",dc=""
    bindPW: your-password

    # dex UI에 보여지는 입력창
    usernamePrompt: Username

    userSearch:
      baseDN: ou="",dc="",dc="",dc=""
      #filter: "(objectClass=person)"
      # LDAP 조회시 사용되는 ID
      username: uid
      # "DN" (case sensitive) is a special attribute name. It indicates that
      # this value should be taken from the entity's DN not an attribute on
      # the entity.
      idAttr: uid
      emailAttr: mail
      nameAttr: gecos

      #groupSearch:
      #baseDN: ou=Groups,dc=example,dc=org
      #filter: "(objectClass=groupOfNames)"

      #userMatchers:
        # A user is a member of a group when their DN matches
        # the value of a "member" attribute on the group entity.
        #- userAttr: DN
        #groupAttr: member

      # The group name should be the "cn" value.
      #nameAttr: cn

staticClients:
- id: example-app
  redirectURIs:
  - 'http://127.0.0.1:5555/callback'
  name: 'Example App'
  secret: ZXhhbXBsZS1hcHAtc2VjcmV0
```
</details>
<br/>

## Tips

<p align="center">
<img src="/assets/img/pepe-electron.gif" alt="pepe-electron"/>
</p>

이제 외부 idP를 사용해 쉽게 인증할 수 있습니다!

### Reference  

[[위키]OAuth](https://en.wikipedia.org/wiki/OAuth)  
[[IBM]OAuth2.0 개념](https://www.ibm.com/docs/ko/sva/9.0.7?topic=SSPREK_9.0.7/com.ibm.isam.doc/config/concept/con_oauth_20_concepts.html#con_oauth_20_concepts)  
[[위키]OpenID](https://en.wikipedia.org/wiki/OpenID#OpenID_Connect_(OIDC))  
[[IBM]OpenID Connect 개념](https://www.ibm.com/docs/ko/sva/9.0.7?topic=concepts-openid-connect)   

[[공식]Dex](https://dexidp.io/)  


<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
https://lcc3108.github.io/articles/2020-12/Istio+Dex-%EC%9D%B8%EC%A6%9D#dex

-->
