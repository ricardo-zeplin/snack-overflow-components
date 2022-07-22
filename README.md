# Example components for Snack Overflow

## How to use this project

Follow the install guidelines that are provided underneath.

### Step 1 - Install Node.JS

If you already have node installed on your machine, you can skip this step. You can check this by opening up a terminal in your machine and running the following command:

```sh
node -v
```

If it says not found, you will need to install Node.JS.

#### Method 1 - Homebrew (Mac only)

You may already have homebrew installed on your machine. To verify this, please open a terminal on your machine and run the following command:

```sh
brew -v
```

If the previous command doesn't return any version, run the following command (during the install it will ask you for your account password):

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After it finishes (it takes a few minutes to complete), run the following command:

```sh
brew install node
```

#### Method 2 - Official installer

Open up your browser and go to the official Node.JS website:
<https://nodejs.org/>

Download the installed for latest LTS version available, open it after the download is complete and follow the instructions to install.

### Step 2 - Install git

You may already have installed git on your machine. Please run the following command to verify:

```sh
git --version
```

If it returns a version number, continue to the next step.

#### Method 1 - Homebrew (Mac only. Recommended method)

To install git, the easiest way is to use Homebrew. If you haven't followed the homebrew install provided in the previous step, you need to install it.

You may already have it on your machine. To verify this, please open a terminal and run the following command:

```sh
brew -v
```

If the previous command doesn't return any version, run the following command (during the install it will ask you for your account password):

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After it finishes (it takes a few minutes to complete), run the following command:

```sh
brew install git
```

#### Method 2 - Official installer (Windows only)

Open a browser on your machine and got to the following url: <https://git-scm.com/download/win>

Download the appropriate installer for your machine and execute it to install git.

### Step 3 - Clone this project

Using either the command line or your favorite code editor to clone this project to your machine.

#### Method 1 - Command line

Open your command line, navigate to a folder where you want to place the project and run the following command:

```sh
git clone https://github.com/ricardo-zeplin/snack-overflow-components.git
```

To navigate on the terminal or create new folders, please refer to this cheat sheet (create for mac, but some commands are the same in all languages):
<https://www.makeuseof.com/tag/mac-terminal-commands-cheat-sheet/>

After cloning the project, execute the following command to navigate to the project folder (this will prepare you for the next step):

```sh
cd snack-overflow-components
```

#### Method 2 - Visual Studio code

If you don't have it already installed on your machine, install it:
<https://code.visualstudio.com/>

To clone a repository using VS Code, follow the instructions on this page:
<https://code.visualstudio.com/docs/editor/versioncontrol#_cloning-a-repository>

### Step 4 - Install dependencies

#### Method 1 - Command line

Navigate to the folder of your project using your terminal (if you aren't already there) and run the following command:

```sh
npm install
```

#### Method 2 - Visual Studio code (integrated terminal)

With the project opened on Visual Studio code, open the integrated terminal following these instructions:
<https://code.visualstudio.com/docs/terminal/basics>

And then, execute the following command:

```sh
npm install
```

### Step 5 - Run storybook

#### Method 1 - Command line

Navigate to the folder of your project using your terminal (if you aren't already there) and run the following command:

```sh
npm run storybook
```

#### Method 2 - Visual Studio code (integrated terminal)

With the project opened on Visual Studio code, open the integrated terminal following these instructions:
<https://code.visualstudio.com/docs/terminal/basics>

And then, execute the following command:

```sh
npm run storybook
```
