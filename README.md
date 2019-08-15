# Introduction

Customized UI templates for Azure AD B2C based on Bootstrap styles.

## Setup

Run `npm install` to add all dependencies.

To create the UI templates run `gulp build --endpoint "YOUR_STORAGE_ENDPOINT"`.

`YOUR_STORAGE_ENDPOINT` is the endpoint where the files will be stored, e.g. <https://mywebsite.com.>

The following files should be generated in the `build` folder:

* selfAsserted.html
* styles.min.css
* unified.html

Copy the contents of the `build` folder to where you host your files.

## Related Links

* <https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-ui-customization-custom>
* <https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-ui-customization-custom-dynamic>
* <https://docs.microsoft.com/en-us/azure/active-directory-b2c/javascript-samples>
