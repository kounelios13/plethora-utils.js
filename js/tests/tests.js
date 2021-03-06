QUnit.module( "Plethora Utils", {
  setup: function() {},
  teardown: function() {}
});

QUnit.test( "Test equality with checkBool()", function( assert ) {

	var value    = 1;
	var expected = true;
	var result   = _p.checkBool(value);

	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = 0;
	expected = false;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "1";
	expected = true;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "0";
	expected = false;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "true";
	expected = true;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "false";
	expected = false;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "TRUE";
	expected = true;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "FALSE";
	expected = false;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "True";
	expected = true;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "False";
	expected = false;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = true;
	expected = true;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = false;
	expected = false;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "On";
	expected = true;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "Off";
	expected = false;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "ON";
	expected = true;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "OFF";
	expected = false;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "on";
	expected = true;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "off";
	expected = false;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "YES";
	expected = true;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "NO";
	expected = false;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "Yes";
	expected = true;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "No";
	expected = false;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "yes";
	expected = true;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "no";
	expected = false;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = undefined;
	expected = false;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = null;
	expected = false;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "undefined";
	expected = false;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

	value    = "randomstring";
	expected = false;
	result   = _p.checkBool(value);
	assert.deepEqual( result, expected, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to " + expected);

});