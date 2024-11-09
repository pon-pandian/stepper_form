import React, { useState, useEffect } from "react";					
import { Grid } from "@mui/material";					
					
const MyComponent = ({ checkboxes, values, whatPlan }) => {		
    			
const [serviceAmount, setServiceAmount] = useState(0);					
const [storageAmount, setStorageAmount] = useState(0);					
const [profileAmount, setProfileAmount] = useState(0);					
const [totalAmount, setTotalAmount] = useState(0);					
					
// Helper function to calculate the amount based on the plan					
const calculateAmount = (amount) => {					
return whatPlan === "monthly" ? amount : amount * 10;					
};					
					
// Update the state for each category					
useEffect(() => {					
let service = 0;					
let storage = 0;					
let profile = 0;					
					
checkboxes					
.filter((checkbox) => values.items.includes(checkbox.id))					
.forEach((checkbox) => {					
if (checkbox.title === "Online Service") {					
service = calculateAmount(checkbox.amount);					
} else if (checkbox.title === "Larger Storage") {					
storage = calculateAmount(checkbox.amount);					
} else if (checkbox.title === "Customizable Profile") {					
profile = calculateAmount(checkbox.amount);					
}					
});					
					
setServiceAmount(service);					
setStorageAmount(storage);					
setProfileAmount(profile);					
					
// Calculate the total amount					
setTotalAmount(service + storage + profile);					
}, [checkboxes, values.items, whatPlan]);					
					
return (					
<div>					
{checkboxes					
.filter((checkbox) => values.items.includes(checkbox.id))					
.map((checkbox) => (					
<p key={checkbox.id} className="final_title">					
<Grid container>					
<Grid item xs={10}>					
{checkbox.title}					
</Grid>					
<Grid item xs={2} className="final_sub_amount">					
{whatPlan === "monthly"					
? `+$${checkbox.amount}/mo`					
: `+$${checkbox.amount * 10}/yr`}					
</Grid>					
</Grid>					
</p>					
))}					
					
<div className="total-amount">					
<h3>Total: ${totalAmount}</h3>					
</div>					
</div>					
);					
};					
					
export default MyComponent;					