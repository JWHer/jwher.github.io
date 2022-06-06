
## 쿠버네티스에서 사용하기

나중에 추가로 작성하겠습니다.  
deployment 작성
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: dex
  name: dex
  namespace: auth
spec:
  replicas: 1
  selector:
    matchLabels:
      app: dex
  template:
    metadata:
      labels:
        app: dex
    spec:
      containers:
      - command:
        - dex
        - serve
        - /etc/dex/cfg/config.yaml
        image: quay.io/dexidp/dex:v2.22.0
        imagePullPolicy: IfNotPresent
        name: dex
        ports:
        - containerPort: 5556
          name: http
          protocol: TCP
        resources: {}
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
        volumeMounts:
        - mountPath: /etc/dex/cfg
          name: config
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      serviceAccount: dex
      serviceAccountName: dex
      terminationGracePeriodSeconds: 30
      volumes:
      - configMap:
          defaultMode: 420
          items:
          - key: config.yaml
            path: config.yaml
          name: dex
        name: config
```

configmap 작성
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: dex
  namespace: auth
data:
  config.yaml: |
    issuer: http://dex.auth.svc.cluster.local:5556/dex
    storage:
      type: kubernetes
      config:
        inCluster: true
    web:
      http: 0.0.0.0:5556
    logger:
      level: "debug"
      format: text
    oauth2:
      skipApprovalScreen: true
    enablePasswordDB: true
    staticPasswords:
    - email: admin@example.com
      hash: $2y$12$ruoM7FqXrpVgaol44eRZW.4HWS8SAvg6KYVVSCIwKQPBmTpCm.EeO
      username: admin
      userID: 08a8684b-db88-4b73-90a9-3cd1661f5466
    staticClients:
    - id: oidc-authservice
      redirectURIs: ["/login/oidc"]
      name: 'Dex Login Application'
      secret: pUBnBOY80SnXgjibTYM9ZWNzY2xreNGQok
```

## dex

https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=alice_k106&logNo=221598325656  
https://lcc3108.github.io/articles/2020-12/Istio+Dex-%EC%9D%B8%EC%A6%9D#dex-%EB%B0%B0%ED%8F%AC

https://github.com/oauth2-proxy/oauth2-proxy  
https://github.com/arrikto/oidc-authservice  
