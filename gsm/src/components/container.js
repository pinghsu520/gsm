import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Box extends React.Component {
	render() {
		return (
			<div>
				 <Container maxWidth="sm">
			        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
			     </Container>

			</div>
		)
	}
}

export default Box;
