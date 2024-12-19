# Introduction

This is the webapp of the code comprehension experiment.

This is just a git submodule for the main experiment repository. The main repository is located [here](https://github.com/costanza1234/USI-Exp-Eval-24/tree/main/experiment2)

It is a simple webapp that asks users to select the correct options among various identifiers written in camelCase or kebab-case.

# How to run

This is a Next.js app.
To run it:

1. Clone the repository
2. Enter the folder `code-comprehension`
3. Add the `.env` file to the root of the project with the following content:

```
MONGODB_URI=insert_your_mongodb_uri_here
MONGODB_DB_NAME=insert_your_mongodb_db_name_here
```

4. Run `npm install`
5. Run `npm run dev`
6. Open your browser and go to `http://localhost:3000`
7. Enjoy!
