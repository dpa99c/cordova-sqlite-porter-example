SQLite Porter Cordova/Phonegap Plugin Example using WebSQL
==========================================================

This repo contains an example Cordova/Phonegap project which illustrates use of the [SQLite Porter plugin](https://github.com/dpa99c/cordova-sqlite-porter) with a WebSQL database.


## Contents
* [Downloading](#downloading)
* [Building](#building)
* [License](#license)
 
# Downloading

To download the example project, clone it using git:

    $ git clone https://github.com/dpa99c/cordova-sqlite-porter-example.git

# Building

This project should build and run on any Cordova/Phonegap platform that supports a WebSQL database in the WebView, which as [stated here](http://docs.phonegap.com/en/4.0.0/cordova_storage_storage.md.html) is currently:

- Android
- iOS
- Tizen
- Blackberry 10

For other platforms that don't support WebSQL (e.g. Windows), you can use a [native SQLite plugin](https://github.com/litehelpers/Cordova-sqlite-storage) to obtain access to a SQLite database.
There's [another example project](https://github.com/dpa99c/cordova-sqlite-porter-example-native-plugin) which demonstrates use of the [SQLite Porter plugin](https://github.com/dpa99c/cordova-sqlite-porter) with the [native SQLite plugin](https://github.com/litehelpers/Cordova-sqlite-storage).

For example, to run on the Android platform, execute the following commands from the project root:

- Install the platform into the project: `$ cordova platform add android`
- Build and run the project: `$ cordova run android`


License
================

The MIT License

Copyright (c) 2015 Working Edge Ltd.

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