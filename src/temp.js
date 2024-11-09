import React from 'react';					
import { Formik, Field, Form, ErrorMessage } from 'formik';					
					
					
function ParentComponent() {					
const checkboxes = [					
{ id: 1, title: 'Item 1', amount: 10 },					
{ id: 2, title: 'Item 2', amount: 20 },					
{ id: 3, title: 'Item 3', amount: 30 },					
];					
					
return (					
<div>					
<Formik					
initialValues={{					
items: [], // array to track selected items					
}}					
onSubmit={(values) => {					

const selectedItems = checkboxes.filter((checkbox) =>					
values.items.includes(checkbox.id)					
);					
console.log('Selected items:', selectedItems);					
}}					
>					
{({ values, setFieldValue }) => (					
<Form>					
{checkboxes.map((checkbox) => (					
<div key={checkbox.id}>					
<label>					
<Field					
type="checkbox"					
name="items"					
value={checkbox.id} 			
onChange={(e) => {					
const checked = e.target.checked;					
const newItems = checked					
? [...values.items, checkbox.id]					
: values.items.filter((item) => item !== checkbox.id);					
					
setFieldValue('items', newItems);				
}}					
/>					
{checkbox.title} - ${checkbox.amount}					
</label>					
</div>					
))}					
					
<div>					
<h3>Selected Items:</h3>					
{checkboxes					
.filter((checkbox) => values.items.includes(checkbox.id))					
.map((checkbox) => (					
<p key={checkbox.id}>					
{checkbox.title} - ${checkbox.amount}					
</p>					
))}					
</div>					
					
<button type="submit">Submit</button>					
</Form>					
)}					
</Formik>					
</div>					
);					
}					
					
export default ParentComponent;					
					