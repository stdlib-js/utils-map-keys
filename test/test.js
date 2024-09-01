/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var mapKeys = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mapKeys, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a source object argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mapKeys( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mapKeys( {}, value );
		};
	}
});

tape( 'the function maps keys from a source object to keys on a destination object', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	function transform( key, value ) {
		return key + value;
	}

	obj1 = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'e': 5
	};

	obj2 = mapKeys( obj1, transform );

	expected = {
		'a1': 1,
		'b2': 2,
		'c3': 3,
		'd4': 4,
		'e5': 5
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function maps keys from a source object to keys on a destination object', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	function transform( key ) {
		return 'beep:' + key;
	}

	obj1 = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'e': 5
	};

	obj2 = mapKeys( obj1, transform );

	expected = {
		'beep:a': 1,
		'beep:b': 2,
		'beep:c': 3,
		'beep:d': 4,
		'beep:e': 5
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function ignores inherited properties', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	function transform( key ) {
		if ( key === 'f' || key === 'g' ) {
			t.ok( false, 'returns an inherited property' );
		}
		return key;
	}

	function Foo() {
		this.a = 1;
		this.b = 2;
		this.c = 3;
		this.d = 4;
		this.e = 5;
		return this;
	}

	Foo.prototype.f = 6;
	Foo.prototype.g = 7;

	obj1 = new Foo();

	obj2 = mapKeys( obj1, transform );

	expected = {
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'e': 5
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function accepts non-plain objects', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	function transform( key, value ) {
		return key + value;
	}

	obj1 = [ 0, 1, 2, 3, 4, 5 ];

	obj2 = mapKeys( obj1, transform );

	expected = {
		'00': 0,
		'11': 1,
		'22': 2,
		'33': 3,
		'44': 4,
		'55': 5
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function returns a shallow copy', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	function transform( key ) {
		return key;
	}

	obj1 = {
		'a': [ 1 ],
		'b': [ 2 ],
		'c': [ 3 ],
		'd': [ 4 ],
		'e': [ 5 ]
	};

	obj2 = mapKeys( obj1, transform );

	expected = {
		'a': obj1.a,
		'b': obj1.b,
		'c': obj1.c,
		'd': obj1.d,
		'e': obj1.e
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.strictEqual( obj2.a, obj1.a, 'returns shallow copy' );
	t.strictEqual( obj2.b, obj1.b, 'returns shallow copy' );
	t.strictEqual( obj2.c, obj1.c, 'returns shallow copy' );
	t.strictEqual( obj2.d, obj1.d, 'returns shallow copy' );
	t.strictEqual( obj2.e, obj1.e, 'returns shallow copy' );

	t.end();
});

tape( 'if provided an empty object, the function returns an empty object', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	function transform( key, value ) {
		t.fail( 'should never be called' );
		return key + value;
	}

	obj1 = {};
	expected = {};

	obj2 = mapKeys( obj1, transform );

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function serializes transform function return values as object keys', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	function transform( key, value ) {
		return value;
	}

	obj1 = {
		'a': {}
	};
	expected = {
		'[object Object]': obj1.a
	};

	obj2 = mapKeys( obj1, transform );

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});
