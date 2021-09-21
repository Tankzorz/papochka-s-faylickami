import {AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core"


function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className="icon" color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" className="title">
                АСУВЗ
                </Typography>
                <Typography variant="subtitle2" className="title">
                ALPHA
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
