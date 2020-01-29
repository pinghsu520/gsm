import React from 'react';
import redFlower from '../images/redFlowers.jpg';
import { withStyles } from '@material-ui/core/styles';
import Button from './materialUiComps/Button';
import Typography from './materialUiComps/Typography';
import ProductHeroLayout from './ProductHeroLayout';

class pastSuccess extends React.Component {
	render() {
		return (
			<div>
				
					<div class="ui divider"></div>
				{/*	<img class="ui fluid image" src={redFlower} />  */}


				 <ProductHeroLayout>
					
					<Typography color="inherit" align="center" variant="h2" marked="center">
				        Test
				      </Typography>
				</ProductHeroLayout>

			</div>
		)
	}
}

export default pastSuccess;



