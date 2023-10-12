To reproduce the issue:

```
# Install dependencies
yarn

# Build react package
yarn workspace @test-lib/react build

# Run vite dev server
yarn workspace @test-lib/web dev

# Then visit the website and check the console logs
# URL: http://127.0.0.1:5173/
```