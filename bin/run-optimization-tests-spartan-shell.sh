# Copyright (C) 2011 Jacob Beard
# Released under GNU LGPL, read the file 'COPYING' for more information

dn=`dirname $0`
abspath=`cd $dn; pwd`
basedir=`dirname $abspath`

if [ ! -e $basedir/build/tests/loaders/spartan-loader-for-all-tests.js ]; then
	echo Please run \"make interpreter tests test-loader\" before running this file.
	exit 1
fi;

interpreter=${1-spidermonkey}

#these tests are highly recursive, so we increase the size of the nodejs stack. 
#same thing is done with the rhino tests running under the JVM
$interpreter $basedir/lib/js/r.js -lib $basedir/build/core/runner.js $basedir/build/core scxml/test/spartan-optimization-harness
