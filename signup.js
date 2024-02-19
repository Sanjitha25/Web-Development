import CloudDoneIcon from '@mui/icons-material/CloudDone';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Button, InputAdornment, TextField, Typography } from "@mui/material"
import { useState } from "react";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Locationicon from '@mui/icons-material/AddLocationAlt';
import Websitelinkicon from '@mui/icons-material/OpenInNew';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import CorporateFareTwoToneIcon from '@mui/icons-material/CorporateFareTwoTone';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FactoryTwoToneIcon from '@mui/icons-material/FactoryTwoTone';
import './Landing.css'

const Signup=()=>{

    const[profile,setProfile]=useState({
        "facName":"",
        "date":"",
        "iName":"",
        "location":"",
        "website":"",
        "iiName":"",
        "designation":"",
        "purpose":"",
        "outcome":"",
        "report":"",
        "photo":"",
        "geotagged photos":""

    })

    const myCollect=(eve)=>{
        eve.preventDefault()
        const{name,value}=eve.target
        setProfile((exists)=>{
            // console.log(JSON.stringify(exists)+" current "+name+" "+value)
            return{
                ...exists,
                [name]:value
            }
        })
    }

    const resetting=()=>{
        setProfile(()=>{
            return{
                "facName":"",
                "date":"",
                "iName":"",
                "location":"",
                "website":"",
                "iiName":"",
                "designation":"",
                "purpose":"",
                "outcome":"",
                "report":"",
                "photo":"",
                "geotagged photos":""
            }
        })
    }
    
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                <Typography variant="h4" color="violet" align="center">
                    VISITE OF INDUSTRIES,INSTITUTION
                </Typography>
                    <div className="col-md-8 col-sm-12 col-lg-6">
                        <div className="card p-5 shadow-lg">
                            <div className="row justify-content-between">
                            
                                <TextField
                                    name="facName"
                                    className="mt-2"
                                    onChange={myCollect}
                                    label="Name of the Faculty"
                                    value={profile.facName}
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonPinIcon color="success" />
                                        </InputAdornment>
                                    ),
                                    }}
                                    variant="outlined"
                                    />
                                <TextField
                                    name="date"
                                    className="mt-3"
                                    onChange={myCollect}
                                    value={profile.date}
                                    label="Date of the Visite"
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <DateRangeIcon color="success" />
                                        </InputAdornment>
                                    ),
                                    }}
                                    variant="outlined"
                                    />
                            
                            <TextField
                                name="iName"
                                className="mt-3"
                                onChange={myCollect}
                                value={profile.iName}
                                label="Name of Industry/Insitution Visited"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <WarehouseIcon color="success" />
                                    </InputAdornment>
                                ),
                                }}
                                variant="outlined"
                            />
                            <TextField
                                name="location"
                                value={profile.location}
                                onChange={myCollect}
                                className="mt-3"
                                label="Location of Industry/Insitution Visited"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Locationicon color="success" />
                                    </InputAdornment>
                                ),
                                }}
                                variant="outlined"
                            />
                            <TextField
                                name="website"
                                value={profile.website}
                                onChange={myCollect}
                                className="mt-3"
                                label="Website link of Industry/Insitution"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Websitelinkicon color="success" />
                                    </InputAdornment>
                                ),
                                }}
                                variant="outlined"
                            />
                            <TextField
                                name="iiName"
                                value={profile.iiName}
                                onChange={myCollect}
                                className="mt-3"
                                label="Name of the Industry/Insitution person Interacted"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <WarehouseIcon color="success" />
                                    </InputAdornment>
                                ),
                                }}
                                variant="outlined"
                            />
                            <TextField
                                name="designation"
                                value={profile.designation}
                                onChange={myCollect}
                                className="mt-3"
                                label="Designation of Industry/Insitution person Interacted"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CorporateFareTwoToneIcon color="success" />
                                    </InputAdornment>
                                ),
                                }}
                                variant="outlined"
                            />
                            <TextField
                                name="purpose"
                                value={profile.purpose}
                                onChange={myCollect}
                                className="mt-3 text-primary-emphasis"
                                label="Purpose of the Visite"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FactoryTwoToneIcon color="success" />
                                    </InputAdornment>
                                ),
                                }}
                                variant="outlined"
                            />
                            <TextField
                                name="outcome"
                                value={profile.outcome}
                                onChange={myCollect}
                                className="mt-3"
                                label="Outcome of the Activity"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <VisibilityOutlinedIcon color="success" />
                                    </InputAdornment>
                                ),
                                }}
                                variant="outlined"
                             />
                             <Typography
                             className="mt-3 mb-2"
                             variant="h6" color="dark" >
                                Attachments:
                             </Typography>

                            <TextField
                                name="report"
                                value={profile.report}
                                onChange={myCollect}
                                className="mt-3"
                                label="report_of_visite_pdf"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FileOpenIcon color="success" />
                                    </InputAdornment>
                                ),
                                }}
                                variant="outlined"
                             />
                             
                            <TextField
                                name="photo"
                                value={profile.photo}
                                onChange={myCollect}
                                className="mt-3"
                                label="photo_jpg"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AddToPhotosIcon color="success"/>
                                    </InputAdornment>
                                ),
                                }}
                                variant="outlined"
                             />
                             
                            <TextField
                                name="geotagged photos"
                                value={profile["geotagged photos"]}
                                onChange={myCollect}
                                className="mt-3"
                                label="geotagged_photos_jpg"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AddPhotoAlternateIcon color="success" />
                                    </InputAdornment>
                                ),
                                }}
                                variant="outlined"
                             />
                            <div className="mt-5 row justify-content-evenly">
                                <Button color="primary" onClick={()=>{
                                    alert(JSON.stringify(profile))
                                    // openAccount(profile)
                                    resetting()
                                }} className="col-3" variant="contained" startIcon={<CloudDoneIcon />}>
                                    SUBMIT
                                </Button>
                                <Button color="error" onClick={()=>{
                                    resetting()
                                }} className="col-3" variant="contained" startIcon={<DeleteForeverRoundedIcon />}>
                                    CLEAR
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </>
)}
export default Signup