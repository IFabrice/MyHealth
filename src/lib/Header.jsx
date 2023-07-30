import logo from './myHealthLogo.png'
import { Grid } from '@mantine/core';

function Header() {
return (
    <Grid>
        <Grid.col span={4}>
            <img width="100"
                src={logo} 
                alt="MyHealth"/>
        </Grid.col>

        <Grid.col span={4}>
            <p>Logout</p>
        </Grid.col>
    </Grid>
);

}

export default Header;