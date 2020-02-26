import React from 'react';
import Grid from '@material-ui/core/Grid';


const ContactPage = () => (
  <div>
    <Grid 
      container 
      direction="column"
      justify="center"
      alignItems="center" 
      spacing={1}
    >
      <Grid item xl>
        <div class="item">
          <h2 class="ui icon header">
            <i class="phone icon"></i>
            <div class="content">
              Give Us a Call
              <div class="sub header">(000)000-0000</div>
            </div>
          </h2>
        </div>
      </Grid>
      <Grid item xl>
        <div class="item">
        <h2 class="ui icon header">
          <i class="envelope icon"></i>
          <div class="content">
            Send Us an Email
            <div class="sub header">default@default.com</div>
          </div>
        </h2>
        </div>
      </Grid>
      <Grid item xl>
        <div class="item">
        <h2 class="ui icon header">
          <i class="facebook icon"></i>
          <div class="content">
            Connect with us on Facebook
            <div class="sub header">defualt</div>
          </div>
        </h2>
        </div>
      </Grid>
    </Grid>
  </div>
);

export default ContactPage;
// import withRoot from '../materialUiComps/withRoot';
// import React from 'react';
// import Connect from '../Connect';
// import Footer from '../../Footer';
// import Grid from '@material-ui/core/Grid';


// function Schedule(){
//   return(
//     <div>
//     <Grid 
//       container 
//       direction="column"
//       justify="center"
//       alignItems="center" 
//       spacing={1}
//     >
//       <Grid item xl>
//         <div class="item">
//           <h2 class="ui icon header">
//             <i class="phone icon"></i>
//             <div class="content">
//               Give Us a Call
//               <div class="sub header">(000)000-0000</div>
//             </div>
//           </h2>
//         </div>
//       </Grid>
//       <Grid item xl>
//         <div class="item">
//         <h2 class="ui icon header">
//           <i class="envelope icon"></i>
//           <div class="content">
//             Send Us an Email
//             <div class="sub header">default@default.com</div>
//           </div>
//         </h2>
//         </div>
//       </Grid>
//       <Grid item xl>
//         <div class="item">
//         <h2 class="ui icon header">
//           <i class="facebook icon"></i>
//           <div class="content">
//             Connect with us on Facebook
//             <div class="sub header">defualt</div>
//           </div>
//         </h2>
//         </div>
//       </Grid>
//     </Grid>
//   </div>
//     // <React.Fragment>
//     //   <Connect />
//     //   <Footer />
//     // </ React.Fragment>
//   )
// }
// export default withRoot(Schedule);
