export const Badge = ({ qty }) => {
    const classes = useStyles();

    return <Badge badgeContent={qty} anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
        overlap:'rectangle'
    }}>
        <AddShoppingCartTwoToneIcon fontSize="large" />
    </Badge>
}