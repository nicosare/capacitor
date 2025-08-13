
# Тихая Забота (Capacitor, оффлайн)

- Оффлайн-трекер привычек и заботы о себе (статический `www/index.html`).
- Локальные уведомления каждый час через `@capacitor/local-notifications`.
- Сборка `.apk` через GitHub Actions (без Android Studio).

## Как собрать APK через GitHub Actions
1. Залей репозиторий на GitHub.
2. Убедись, что в `.github/workflows/build-apk.yml` есть workflow.
3. Открой вкладку **Actions** → **Run workflow** (или сделай push в `main`).
4. После завершения сборки скачай артефакт `app-debug.apk`.

## Локально (если когда-нибудь понадобится)
```bash
npm install
npm run build
npx cap add android
npx cap sync android
cd android && ./gradlew assembleDebug
```
