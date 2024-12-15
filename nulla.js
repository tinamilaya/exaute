// Assuming mergedScaleCmpt is defined somewhere earlier
const mergedScaleCmpt = someFunctionThatReturnsScaleComponent();

// Retrieve the type of the scale component
const scaleType = mergedScaleCmpt.get('type');

// Check the type and proceed accordingly
if (scaleType === 'ordinal') {
    // Handle ordinal scale
} else if (scaleType === 'linear') {
    // Handle linear scale
} else {
    // Handle other types
}
