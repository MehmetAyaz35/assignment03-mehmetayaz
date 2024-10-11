# Hotel App Pipeline

## Overview

This repository contains the configuration and implementation files for the HotelAppPipeline project. The main components of this project include a pipeline definition, TypeScript files for various pages (like dashboard, bills, etc.), and a test suite. This README will guide you through the purpose and contents of the .yml configuration file and how it integrates with the rest of the system.

## YML Configuration File
 **hotelAppPipeline.yml**

 This .yml file defines the CI/CD pipeline for the HotelApp. It is primarily used to automate the build, test, and deployment processes. Below are the key components of the .yml file:

- Build Steps: The steps involved in building the application.
- Testing: Configuration for running automated tests using Playwright.
- Deployment: How and where the application is deployed after successful tests.

The YML file ensures a smooth workflow by integrating with a CI tool (such as Jenkins, GitHub Actions, or GitLab CI) and defining the tasks to be executed on every push or pull request.

To run these tests, ensure the following:
- Node.js installed on your machine.
- Docker installed for running the test application.
- Environment variables managed via `.env` file.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MehmetAyaz35/assignment03-mehmetayaz.git
   ```
2. **Navigate to the project directory**:

   ```bash
   cd assignment03-mehmetayaz
    ```
3. **Install project dependencies**:

   ```bash
   npm install
    ```
4. **Create a .env file in the root directory with the following content**:

   ```bash
   BASE_URL_API=http://localhost:3000/api
   BASE_URL=http://localhost:3000/
   TEST_USERNAME=tester01
   TEST_PASSWORD=GteteqbQQgSr88SwNExUQv2ydb7xuf8c
    ```
 
## Adding Secrets to GitHub

To securely manage sensitive data like API keys or passwords, these values should be stored as GitHub Secrets. Here’s how you can add secrets and access them in your pipeline's environment:

**Steps to Add Secrets:**
1. Go to your repository's Settings tab on GitHub.
2. In the left sidebar, click on Secrets and variables under the Actions section.
3. Click New repository secret.
4. Enter a Name for your secret (e.g., TEST_USERNAME) and the corresponding Value (e.g., tester01).
5. Click Add secret to save it.

**Using Secrets in GitHub Actions**
Once your secret is added, you can access it in your GitHub Actions workflow by referencing it in the env section of the .yml file:
```bash
env:
  API_KEY: ${{ secrets.TEST_USERNAME }}
```

This makes your secret accessible as an environment variable within your workflow, while keeping it secure and out of version control.

