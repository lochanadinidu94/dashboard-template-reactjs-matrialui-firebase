import { makeStyles , useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;
export const useStyle = makeStyles( (theme = useTheme()) =>({
    root: {
        display: 'flex',
        "& .MuiPaper-root":{
            backgroundColor:"#fafafa"
        }
    },

    // Company Logo

    navigationLogo :{
        width: '50%',
        cursor: 'pointer'
    }, 
    navigationLogoContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom: theme.spacing(4),
        paddingTop: theme.spacing(-2),
    },

    // End Company Logo

    //App Bar

    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },

    appBarSpacer:{
      paddingTop: theme.spacing(5)
      // ...theme.mixins.toolbar,
    },

    //End App Bar

   //MUI Drawer
    menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        height: "100vh",
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
    //End MUI Drawer

    // Navigation List Menu Items
   
    navigationList:{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        flex: 1,
    },
    navigationSpacer:{
        flex: 1,
    },
    menuItemDiv:{
        width: '200px',
    },
    menuItemIcon:{
        width:'100%'
    },
    menuItem:{
        width: "80%",
        borderRadius: theme.spacing(1),
        marginBottom: theme.spacing(1),
       
    },
    menuItemActive:{
        backgroundColor:'#EBEBEC'
    },

    // End Navigation List Menu Items

    // Body Content
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth,
      textAlign:'justify'
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }

    // End Body Content

}));