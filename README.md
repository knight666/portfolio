This is the code for the Quinten Lansu's portfolio, hosted at [qlansu.nl](https://qlansu.nl).

# Commands

* `grunt` - Build site from Markdown files.
* `grunt --deploy` - Upload files to website.

# Deploying

Create a file named `.ftppass` on the root with the following structure:

    {
        "website": {
            "username": "username",
            "password": "password"
        }
    }