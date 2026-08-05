# GA4 인기 글 기능 설정

한 번만 설정하면 매월 1일 자동으로 업데이트됩니다.

## 1. GA4 Property ID 확인

GA4 → Admin → Property Settings → **Property ID** (숫자, 예: 123456789)  
(측정 ID인 `G-XHBVCY40VB` 와 다른 값입니다)

## 2. GCP 서비스 계정 생성

1. [Google Cloud Console](https://console.cloud.google.com) → IAM & Admin → Service Accounts
2. **Create Service Account** (이름 자유, 예: `ga4-reader`)
3. Keys 탭 → **Add Key** → JSON → 다운로드

## 3. GA4에 서비스 계정 Viewer 권한 부여

GA4 → Admin → Account Access Management → **Add users**  
→ 서비스 계정 이메일 입력 → Viewer 역할 선택

## 4. GitHub Secrets 등록

저장소 → Settings → Secrets and variables → Actions → **New repository secret**

| Secret 이름 | 값 |
|---|---|
| `GA_PROPERTY_ID` | 위에서 확인한 숫자 ID |
| `GA_SERVICE_ACCOUNT_KEY` | 아래 명령어 결과 |

```bash
base64 < service-account-key.json | tr -d '\n'
```

## 5. 확인

설정 후: Actions → **Update GA4 Views** → **Run workflow**  
→ `src/data/ga-views.ts` 가 업데이트되고 배포되면 성공

## 자동 실행 일정

매월 1일 09:00 KST (00:00 UTC)  
워크플로우 파일: `.github/workflows/update-ga-views.yml`
