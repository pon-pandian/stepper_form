import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import DoneSharpIcon from "@mui/icons-material/DoneSharp";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Grid from "@mui/material/Grid2";
import logo from "./logo.svg";
import "./App.css";
import { FormLabel } from "@mui/material";
import icon_advanced from "./Assets/Images/icon_advanced.svg";
import icon_arcade from "./Assets/Images/icon_arcade.svg";
import icon_pro from "./Assets/Images/icon_pro.svg";
import thank_you_icon from "./Assets/Images/thank_you_icon.svg";
import {
  Switch,
  FormControlLabel,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";

function App() {

  const [CurrentStep, setCurrentStep] = useState(0);
  const [done, setDone] = useState({});
  const steps = document.querySelectorAll(".step");
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const emailRegex = /\w+[@][a-zA-Z]+\.com/;
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [ whatPlan, setWhatPlan] = useState("monthly")
  const [ totalAmount, setTotalAmount] = useState(9);
  const [ totalPlan, setTotalPlan] = useState(0);
  const [serviceAmount, setServiceAmount] = useState(0);
  const [storageAmount, setStorageAmount] = useState(0);
  const [profileAmount, setProfileAmount] = useState(0);
  const [ prevAmount ,setPrevAmount] = useState(0);
  

  const cardDetails = [
    {
      name: "Arcade",
      defaultPrice: 9,
      yearlyPrice: 90,
      imageIcon: icon_arcade,
    },
    {
      name: "Advanced",
      defaultPrice: 12,
      yearlyPrice: 120,
      imageIcon: icon_advanced,
    },
    { name: "Pro", defaultPrice: 15, yearlyPrice: 150, imageIcon: icon_pro },
  ];
  const [selectedCard, setSelectedCard] = useState("Arcade");

  const handleCardSelection = (card) => {
    setSelectedCard(card);
  };

  const getCardPrice = (card, selectedPlan) => {
    return selectedPlan === "monthly" ? card.defaultPrice : card.yearlyPrice;
  };

  const getFreeMonthsText = (selectedPlan) => {
    return selectedPlan === "yearly" ? "2 Months free" : "";
  };

  const checkboxes = [
    {
      id: 1,
      title: "Online Service",
      subTitle: "Access to multiplayer games",
      amount:  1 ,
    },
    {
      id: 2,
      title: "Larger Storage",
      subTitle: "Extra 1TB of cloud save",
      amount: 2,
    },
    {
      id: 3,
      title: "Customizable Profile",
      subTitle: "custom theme on your profile",
      amount: 2 ,
    },
  ];


  
  

  function showStep(CurrentStep) {
    steps.forEach((value, index) => {
      value.style.display = index === CurrentStep ? "block" : "none";
    });
  }

  function addStep() {
    setCurrentStep(() => CurrentStep + 1);
  }

  function removeStep() {
    setCurrentStep(() => CurrentStep - 1);
  }

  showStep(CurrentStep);
  console.log(CurrentStep);

  const FormSchema = 
    Yup.object().shape({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Name is required"),
      email: Yup.string()
        .matches(emailRegex, "Please provide your valid email address.")
        .required("Email address is required"),
      phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(phoneRegExp, "Please provide a valid mobile number.")
        .min(10, "too short")
        .max(10, "too long"),
    });

  const handleNext = async (validateForm) => {						
    const errors = await validateForm(); 		
    if (Object.keys(errors).length === 0) {						
      addStep();						
      } 								 
    showStep(CurrentStep);						
    }						
    
  
  console.log("current--Plan ---> " ,whatPlan);

  return (
    <>
      <Grid container className="bg_grey" style={{ minHeight: "100vh" }}>
        <Box
          className="box"
          sx={{
            width: 1000,
            height: 600,
            borderRadius: 1,
            bgcolor: "white",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              size={3.6}
              className={
                CurrentStep === 0
                  ? "sunset image_box_height"
                  : CurrentStep === 1
                  ? "image_box_height snow_mountain"
                  : CurrentStep === 2
                  ? "image_box_height pink_cloud"
                  : CurrentStep === 3
                  ? "image_box_height moon"
                  : "image_box_height thank_you"
              }
            >
              <Grid container size={12} className="step_box_one">
                <Grid size={4}>
                  <p className={CurrentStep === 0 ? "stepper_plus" : "stepper"}>
                    {CurrentStep > 0 ? (
                      <DoneSharpIcon className="done_icon" />
                    ) : (
                      1
                    )}
                  </p>
                </Grid>
                <Grid size={8}>
                  <p
                    className={
                      CurrentStep === 0
                        ? "step_count text_pink"
                        : CurrentStep === 1
                        ? "step_count text_grey"
                        : CurrentStep === 2
                        ? "step_count text_purple"
                        : CurrentStep === 3
                        ? "step_count text_sky_grey"
                        : "step_count text_thank_you_grey"
                    }
                  >
                    STEP 1
                  </p>
                  <p className="step_head">YOUR INFO</p>
                </Grid>
              </Grid>
              <Grid container size={12} className="step_box">
                <Grid size={4}>
                  <p className={CurrentStep === 1 ? "stepper_plus" : "stepper"}>
                    {CurrentStep > 1 ? (
                      <DoneSharpIcon className="done_icon" />
                    ) : (
                      2
                    )}
                  </p>
                </Grid>
                <Grid size={8}>
                  <p
                    className={
                      CurrentStep === 0
                        ? "step_count text_pink"
                        : CurrentStep === 1
                        ? "step_count text_grey"
                        : CurrentStep === 2
                        ? "step_count text_purple"
                        : CurrentStep === 3
                        ? "step_count text_sky_grey"
                        : "step_count text_thank_you_grey"
                    }
                  >
                    STEP 2
                  </p>
                  <p className="step_head">SELECT PLAN</p>
                </Grid>
              </Grid>
              <Grid container size={12} className="step_box">
                <Grid size={4}>
                  <p className={CurrentStep === 2 ? "stepper_plus" : "stepper"}>
                    {CurrentStep > 2 ? (
                      <DoneSharpIcon className="done_icon" />
                    ) : (
                      3
                    )}
                  </p>
                </Grid>
                <Grid size={8}>
                  <p
                    className={
                      CurrentStep === 0
                        ? "step_count text_pink"
                        : CurrentStep === 1
                        ? "step_count text_grey"
                        : CurrentStep === 2
                        ? "step_count text_purple"
                        : CurrentStep === 3
                        ? "step_count text_sky_grey"
                        : "step_count text_thank_you_grey"
                    }
                  >
                    STEP 3
                  </p>
                  <p className="step_head">ADD-ONS</p>
                </Grid>
              </Grid>
              <Grid container size={12} className="step_box">
                <Grid size={4}>
                  <p
                    className={
                      CurrentStep === 3
                        ? "stepper_plus"
                        : CurrentStep === 4
                        ? "stepper_plus"
                        : "stepper"
                    }
                  >
                    {CurrentStep > 3 ? (
                      <DoneSharpIcon className="done_icon" />
                    ) : (
                      4
                    )}
                  </p>
                </Grid>
                <Grid size={8}>
                  <p
                    className={
                      CurrentStep === 0
                        ? "step_count text_pink"
                        : CurrentStep === 1
                        ? "step_count text_grey"
                        : CurrentStep === 2
                        ? "step_count text_purple"
                        : CurrentStep === 3
                        ? "step_count text_sky_grey"
                        : "step_count text_thank_you_grey"
                    }
                  >
                    STEP 4
                  </p>
                  <p className="step_head">SUMMARY</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={7.4} className="form_box">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phoneNumber: "",
                  items: [],
                  picked: "",
                  plan: "monthly",
                }}
                validationSchema={FormSchema}
                onSubmit={(values) => {
                  const selectedItems = checkboxes.filter((checkbox) =>
                    values.items.includes(checkbox.id)
                  );
                  console.log("Selected items:", selectedItems);
                  console.log("AllValues->", values);
                }}
              >
                {({ errors, touched, values,validateForm, setFieldValue }) => (
                  <Form>
                    <div className="step">
                      <Grid className="grid_fields">
                        <h1 className="text_dark_blue form_head">
                          Personal Info
                        </h1>
                        <p className="text_light_grey form_body">
                          Please provide your name, email address, and phone
                          number
                        </p>
                    
                    	
                        <p className="input_title">
                          <FormLabel className="input_label">Name*</FormLabel>{" "}
                          {errors.name && touched.name || Object.keys(errors).length > 0 && (Object.keys(errors).filter((key)=> key === "name")) ? (
                            <span className="error_message">{errors.name}</span>
                          ) : null}
                        </p>
                        <p className="form_item">
                          <Field
                            className={
                              errors.name && touched.name  || Object.keys(errors).length > 0 && (Object.keys(errors).filter((key)=> key === "name"))
                                ? "input_box input_error"
                                : "input_box"
                            }
                            name="name"
                            placeholder="Enter your name"
                            autoComplete="off"
                          />
                        </p>

                        <p className="input_title">
                          {" "}
                          <FormLabel className="input_label">
                            Email Address*
                          </FormLabel>
                          {errors.email && touched.email || Object.keys(errors).length > 0 && (Object.keys(errors).filter((key)=> key === "email"))  ? (
                            <span className="error_message">
                              {errors.email}
                            </span>
                          ) : null}
                        </p>
                        <p className="form_item">
                          <Field
                            className={
                              errors.email && touched.email  || Object.keys(errors).length > 0 && (Object.keys(errors).filter((key)=> key === "email"))
                                ? "input_box input_error"
                                : "input_box"
                            }
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                          />
                        </p>

                        <p className="input_title">
                          <FormLabel className="input_label">
                            Phone Number*
                          </FormLabel>
                          
                          {errors.phoneNumber && touched.phoneNumber || Object.keys(errors).length > 0 && (Object.keys(errors).filter((key)=> key === "phoneNumber"))  ? (
                            <span className="error_message">
                              {errors.phoneNumber}
                            </span>
                          ) : null}
                        </p>
                        <p className="form_item">
                          <Field
                            className=
                            {
                              errors.phoneNumber && touched.phoneNumber|| Object.keys(errors).length > 0 && (Object.keys(errors).filter((key)=> key === "phoneNumber"))
                                ? "input_box input_error"
                                : "input_box"
                            }
                            name="phoneNumber"
                            placeholder="Enter your Phone Number"
                            autoComplete="off"
                          />
                        </p>
                      </Grid>

                      {/* {Object.keys(errors).length > 0 && (						
<>												
{Object.keys(errors).map((key) => (						
<span className="error_message" key={key}>{key === "name" ? errors[key] : null}</span>						
))}											
</>						
)}		 */}
                      <Grid>
                        <div className="button_box_one">
                          <Button
                            style={{ textTransform: "none" }}
                            className="form_button"
                            type="button"
                            onClick={() => handleNext(validateForm)}
                            
                          >
                            Next
                          </Button>
                        </div>
                      </Grid>
                    </div>

                    <div className="step display_none">
                      <Grid className="grid_fields">
                        <h1 className="text_dark_blue form_head">Plans</h1>
                        <p className="text_light_grey form_body">
                          You have the option for monthly or yearly billing.
                        </p>
                     
                        <Grid >
                        <Box sx={{ display: "flex", gap: 2, marginTop: 2 }} className="main_card_box">
                          {cardDetails.map((card) => (
                            <Card
                              key={card.name}
                              sx={{
                                width: 150,
                                cursor: "pointer",
                                border:
                                  selectedCard === card.name
                                    ? "2px solid #473dff"
                                    : "1px solid #ddd",
                                backgroundColor: 
                                   selectedCard === card.name
                                   ? "#f0f6ff"
                                   : "#ffffff"
                              }}
                               className="card_box"
                              onClick={() => { 
                                handleCardSelection(card.name);
                                setTotalAmount(whatPlan === "monthly" ? card.defaultPrice : card.yearlyPrice)
                               }}
                             
                          
                            >
                              <CardContent 
                            
                               >
                              <img
                                src={card.imageIcon}
                                title={card.name}
                                />
                                <Typography variant="h6" component="div" className="plans_title">
                                  {card.name}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  className="plans_amount"
                                >
                                  {values.plan === "monthly"
                                    ? `${card.defaultPrice}/mo`
                                    : `${card.yearlyPrice}/yr`}
                                </Typography>
                                {values.plan === "yearly" && (
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    className="month_free"
                                  >
                                    {getFreeMonthsText(values.plan)}
                                  </Typography>
                                )}
                              </CardContent>
                            </Card>
                          ))}
                        </Box>
                        </Grid>
                        <Grid className="cards_grid">
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 2,
                          }}
                           className="switch_box"
                        >
                          <Box
                            sx={{ cursor: "pointer", marginRight: 2 }}
                            onClick={() => {
                              setFieldValue("plan", "monthly");
                             
                            }}
                           
                          >

                            <Typography
                              variant="h6"
                              sx={{
                                color:
                                  values.plan === "monthly"
                                    ? "#02295a"
                                    : "#8a8c93",
                              }}
                              className="month_year"
                            >
                              Monthly
                            </Typography>
                          </Box>

                          <FormControlLabel
                            control={
                              <Switch
                                checked={values.plan === "yearly"}
                                onChange={(e) =>{
                                  setFieldValue(
                                    "plan",
                                    e.target.checked ? "yearly" : "monthly"
                                  );
                                  setWhatPlan(e.target.checked ? "yearly" : "monthly");
                                }
                                }
                                name="plan"
                                color="primary"
                                sx={{
                                  "& .MuiSwitch-thumb": { borderRadius: "50%" },
                                  "& .MuiSwitch-track": {
                                    borderRadius: "20px",
                                  },
                                }}
                          
                              />
                            }
                            label={null}
                          />

                          <Box
                            sx={{ cursor: "pointer", marginLeft: 2 }}
                            onClick={() => setFieldValue("plan", "yearly")}
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                color:
                                  values.plan === "yearly"
                                    ? "#02295a"
                                    : "#8a8c93",
                              }}
                              className="month_year"
                            >
                              Yearly
                            </Typography>
                          </Box>
                        </Box>
                        </Grid>
                       
                      </Grid>
                      <Grid>
                        <div className="button_box">
                          <Button
                            style={{ textTransform: "none" }}
                            className="form_button back_button"
                            type="button"
                            onClick={() => {
                              removeStep();
                              showStep(CurrentStep);
                            }}
                          >
                            Go Back
                          </Button>
                          <Button
                            style={{ textTransform: "none" }}
                            className="form_button"
                            type="button"
                            onClick={() => {
                              addStep();
                              showStep(CurrentStep);
                            }}
                          >
                            Next
                          </Button>
                        </div>
                      </Grid>
                    </div>

                    <div className="step display_none">
                      <Grid className="grid_fields">
                        <h1 className="text_dark_blue form_head">
                          Pick add-ons
                        </h1>
                        <p className="text_light_grey form_body">
                          Add-ons help enhance your gaming experience.
                        </p>
                        {checkboxes.map((checkbox) => {
                          const isSelected = done[checkbox.id] || false;
                          console.log("isSelected", isSelected);
                          const handleCheckBox = (id, e) => {
                            const checked = e.target.checked;

                            setDone((preState) => (
                              {
                              ...preState,
                              [id]: !preState[id],
                            }
                          ));
                      
                           

                            const newItems = checked
                              ? [...values.items, checkbox.id]
                              : values.items.filter(
                                  (item) => item !== checkbox.id
                                );
                               
                            setFieldValue("items", newItems);
                          };
                          return (
                            <>
                              <Grid
                                container
                                key={checkbox.id}
                                className={
                                  isSelected
                                    ? "checkbox_box after_checked"
                                    : "checkbox_box"
                                }
                              >
                                <Grid size={1} className="done_box">
                                  <label className="custom_checkbox">
                                    <Field
                                      type="checkbox"
                                      name="items"
                                      value={checkbox.id}
                                      onChange={(e) =>
                                        handleCheckBox(checkbox.id, e)
                                      }
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </Grid>
                                <Grid size={10}>
                                  <p className="checkbox_title">
                                    {checkbox.title}
                                  </p>
                                  <p className="checkbox_sub">
                                    {checkbox.subTitle}
                                  </p>
                                </Grid>
                                <Grid size={1} className="amount_box">
                                  <p className="checkbox_amount">
                                    {whatPlan === "monthly" ?`+$${checkbox.amount}/mo` : `+$${checkbox.amount*10}/yr`}
                                  </p>
                                </Grid>
                              </Grid>
                            </>
                          );
                        })}
                      </Grid>

                      <Grid>
                        <div className="button_box">
                          <Button
                            style={{ textTransform: "none" }}
                            className="form_button back_button"
                            type="button"
                            onClick={() => {
                              removeStep();
                              showStep(CurrentStep);
                            }}
                          >
                            Go Back
                          </Button>
                          <Button
                            style={{ textTransform: "none" }}
                            className="form_button"
                            type="button"
                            onClick={() => {
                              addStep();
                              showStep(CurrentStep);
                            }}
                          >
                            Next
                          </Button>
                        </div>
                      </Grid>
                    </div>

                    <div className="step display_none">
                      <Grid className="grid_fields">
                        <h1 className="text_dark_blue form_head">
                          Finishing up
                        </h1>
                        <p className="text_light_grey form_body">
                          Double-check everithing looks OK before confirming
                        </p>

                        <div className="final_check">
                          <Box sx={{ marginTop: 4 }}>
                            <Typography variant="h6" className="final_name">
                            <Grid container size={12}>
                              <Grid size={10}>
                              {`${selectedCard} (${
                               (values.plan === 'monthly'? 'Monthly': 'Yearly') 
                              }) `}

                              </Grid>
                              <Grid  size={2}>
                              {`$${getCardPrice(
                                cardDetails.find(
                                  (card) => card.name === selectedCard
                                ),
                                values.plan
                              )}/${values.plan === "monthly" ? "mo" : "yr"}`}

                              </Grid>
                            </Grid>
                           


                             

                            </Typography>
                            <span className="final_change" onClick={ () => setCurrentStep(1)}>Change</span>
                            
                          </Box>
                          <hr />
                          {checkboxes
                            .filter((checkbox) =>
                              values.items.includes(checkbox.id)
                            )
                            .map((checkbox) => (
                              <p key={checkbox.id} className="final_title">
                                <Grid container size={12}>
                                  <Grid size={10}>
                                  {checkbox.title} 

                                  </Grid>
                                  <Grid size={2} className="final_sub_amount">
                                  {setServiceAmount(checkbox.title === "Online Service" ? (whatPlan === "monthly" ? checkbox.amount : checkbox.amount*10 ): "")}
                                {setStorageAmount(checkbox.title === "Larger Storage" ? (whatPlan === "monthly" ? checkbox.amount : checkbox.amount*10 ): "")}
                                {setProfileAmount(checkbox.title === "Customizable Profile" ? (whatPlan === "monthly" ? checkbox.amount : checkbox.amount*10 ): "")}
                                {setPrevAmount()}
                                {whatPlan === "monthly" ?`+$${checkbox.amount}/mo` : `+$${checkbox.amount*10}/yr`}

                                  </Grid>
                                </Grid>
                               
                               
                                
                              </p>

                            ))}
                        </div>
                        <div className="total_bottom">
                        <Grid container size={12}>
                          <Grid size={10} className="total_title">
                          Total (per month)
                          </Grid>
                          <Grid size={2} className="total_amount">
                          {/* <span>{`+$${(Number(totalAmount)+ Number(serviceAmount) + Number(storageAmount) + Number(profileAmount))}/mo`}</span> */}
                              <span>{`+$${Number(totalAmount)+Number(prevAmount)}/mo`}</span>
                          </Grid>
                        </Grid>
                        
                        
                        </div>

                      </Grid>
                      <Grid>
                        <div className="button_box">
                          <Button
                            style={{ textTransform: "none" }}
                            className="form_button back_button"
                            type="button"
                            onClick={() => {
                              removeStep();
                              showStep(CurrentStep);
                            }}
                          >
                            Go Back
                          </Button>
                          <Button
                            style={{ textTransform: "none" }}
                            className="form_button"
                            type="submit"
                            onClick={() => {
                              addStep();
                              showStep(CurrentStep);
                            }}
                          >
                            Confirm
                          </Button>
                        </div>
                      </Grid>
                    </div>

                    <div className="step display_none">
                      <Grid container className="thank_you_page end_page_image">
                        <img src={thank_you_icon} alt="thank you"></img>
                      </Grid>
                      <Grid container className="thank_you_page">
                        <h1 className="text_dark_blue form_end_head">
                          Thank you!
                        </h1>
                      </Grid>
                      <Grid container className="thank_you_page">
                        <p className="form_end">
                          
                          Thanks for confirming your subscription! We hope you
                          have fun using our platform. If you ever need support,
                          please feel free to email us at support@mg.com.
                        </p>
                      </Grid>
                    </div>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default App;
