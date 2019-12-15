import React from 'react';

import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import classes from './SideDrawer.css';

const sideDrawer = ( props ) => {
    let attacheClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attacheClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attacheClasses.join(' ')}>
            <div className={classes.Logo}> 
                <Logo />
            </div>
            <nav>
                <Navigationitems />
            </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;