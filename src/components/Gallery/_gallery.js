
<Container className={classes.gallery}>
    <Grid container spacing={8}>
        <Grid item xs={12} sm={3} className={classes.grid1}>
            <Button>
                <Grid container direction="column">
                    <Grid container justify="center">
                        <LibraryBooksIcon style={{ fontSize: 110, color: 'white' }} />
                        <Typography
                            component="h2"
                            variant="h3"
                            className={classes.gridtext}>
                            نمونه سوالات کارسوق
              </Typography>
                    </Grid>

                </Grid>
            </Button>

        </Grid>
        <Grid item xs={12} sm={3} className={classes.grid2}>

            <Button>
                <Grid container direction="column">
                    <Grid container justify="center">

                        <WallpaperIcon style={{ height: '100%', width: '100%', color: 'white' }} />
                        <Typography
                            component="h2"
                            variant="h3"
                            className={classes.gridtext}>
                            گالری تصاویر
              </Typography>
                    </Grid>
                </Grid>
            </Button>
        </Grid>

        <Grid item xs={12} sm={3} className={classes.grid1}>
            <Button>
                <Grid container direction="column">
                    <Grid container justify="center">
                        <MenuBookRoundedIcon style={{ fontSize: 110, color: 'white' }} />
                        <Typography
                            component="h2"
                            variant="h3"
                            className={classes.gridtext}>
                            آشنایی با کارگاه ها
              </Typography>
                    </Grid>
                </Grid>
            </Button>
        </Grid>

        <Grid item xs={12} sm={3} className={classes.grid2}>
            <Button>
                <Grid container direction="column">
                    <Grid container justify="center">
                        <VideocamIcon style={{ fontSize: 110, color: 'white' }} />
                        <Typography
                            component="h2"
                            variant="h3"
                            className={classes.gridtext}>
                            کلیپ معرفی
              </Typography>
                    </Grid>
                </Grid>
            </Button>
        </Grid>

    </Grid>
</Container>

