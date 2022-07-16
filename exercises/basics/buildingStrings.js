// The intention of the program below is to output a paragraph. Copy and paste the program into a JavaScript console (e.g., from the Chrome Developer Tools), then run it. 
// Is the output what you expected? Are there any bugs/errors?

const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
                hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);

// There is a SyntaxError: Invalid or unexpected token caused by whitespaces after the line break 
// on the 5th line of `paragraph`. 
// Also, there are extra spaces in the middle of some sentences because the spaces at the beginning
// of each line (from 2-6) are interpreted as part of the string.