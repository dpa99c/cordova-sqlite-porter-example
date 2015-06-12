SQLite Porter Cordova/Phonegap Plugin Example using WebSQL
==========================================================

This repo contains an example Cordova/Phonegap project which illustrates use of the [SQLite Porter plugin](https://github.com/dpa99c/cordova-sqlite-porter) with a WebSQL database.


## Contents
* [Downloading](#downloading)
* [Running](#running)
* [License](#license)
 
# Downloading

To download the example project, clone it using git:

    $ git clone https://github.com/dpa99c/cordova-sqlite-porter-example.git


# Running

The project should build and run on any Cordova/Phonegap platform that supports a WebSQL database in the WebView, which as [stated here](http://docs.phonegap.com/en/4.0.0/cordova_storage_storage.md.html) is currently:

- Android
- iOS
- Tizen
- Blackberry 10

For other platforms that don't support WebSQL (e.g. Windows), you can use a [native SQLite plugin](https://github.com/litehelpers/Cordova-sqlite-storage) to obtain access to a SQLite database. The [SQLite Porter plugin](https://github.com/dpa99c/cordova-sqlite-porter) plugin will

To run the Android project either build and run the project using the Phonegap CLI:

    $ phonegap run android


Or import the project in Eclipse and run it from there. The Eclipse project is located here:

    LaunchNavigatorExample/platforms/android


# iOS

To run the iOS project either build and run the project using the Phonegap CLI:

    $ phonegap run ios

Note: For this to work, you need to build and install the Phonegap ios-deploy project first: `npm install -g ios-deploy`

Or import the project in Xcode and run it from there. The Xcode project is located here:

    LaunchNavigatorExample/platforms/ios

# Windows

To run the Windows project either build and run the project using the Cordova CLI (PhoneGap should work too):

    $ cordova run windows

Note: This will run the app in your Windows 8.1 PC. For this to work, you need at least Visual Studio 2013 Community: http://www.visualstudio.com

Or import the project in Visual Studio 2013 and run it from there. Within Visual Studio, you will be able to choose between Windows Phone 8.1 and Windows 8.1 (PC). The Visual Studio 2013 project is located here:

    LaunchNavigatorExample/platforms/windows/CordovaApp.sln

# WP8

To run the Windows Phone 8.0 project either build and run the project using the Cordova CLI (PhoneGap should work too):

    $ cordova run wp8

Note: This will run the app in your Windows 8.0 or 8.1 phone. For this to work, you need at least Visual Studio 2013 Community: http://www.visualstudio.com

Or import the project in Visual Studio 2013 and run it from there.

	LaunchNavigatorExample/platforms/wp8/LaunchNavigatorExample.sln

# Credits

Thanks to [opadro](https://github.com/opadro) for Windows platform example

License
================

The MIT License

Copyright (c) 2014 Working Edge Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.