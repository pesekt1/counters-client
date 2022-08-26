# React-demo

## Add github action for CI/CD

We need a yml file to run the build and test.

Create a folder .github/worklows/ and add the following file test.yml:


```yml
name: CI
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install modules
        run: yarn
      - name: Run tests
        run: yarn test
```

This will find the Jest tests and run them.

Now if we push to github repo, this action will be triggered, all the tests will run.

If we are deploying to Heroku, we can set up automatic deployment after all the tests were successful.