
// import React from 'react';
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { createVenue } from '@/api/venueService';
// import { toast } from 'sonner';
// import { useNavigate } from 'react-router-dom';
// import { 
//   Form, 
//   FormControl, 
//   FormField, 
//   FormItem, 
//   FormLabel, 
//   FormMessage,
//   FormDescription
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { 
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue
// } from "@/components/ui/select";
// import { 
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle
// } from "@/components/ui/card";

// // Define form validation schema
// const venueFormSchema = z.object({
//   name: z.string().min(3, { message: "Name must be at least 3 characters" }),
//   description: z.string().min(10, { message: "Description must be at least 10 characters" }),
//   address: z.string().min(5, { message: "Address is required" }),
//   city: z.string().min(2, { message: "City is required" }),
//   state: z.string().min(2, { message: "State is required" }),
//   zipCode: z.string().min(5, { message: "Valid ZIP code is required" }),
//   capacity: z.coerce.number().min(1, { message: "Capacity must be at least 1" }),
//   pricePerHour: z.coerce.number().min(1, { message: "Price must be at least ₹1" }),
//   amenities: z.string().transform(str => str.split(',').map(item => item.trim()).filter(Boolean)),
//   images: z.string().transform(str => str.split(',').map(item => item.trim()).filter(Boolean)),
//   category: z.string().min(1, { message: "Category is required" }),
// });

// const AddVenueForm = () => {
//   const navigate = useNavigate();
  
//   // Initialize form
//   const form = useForm({
//     resolver: zodResolver(venueFormSchema),
//     defaultValues: {
//       name: "",
//       description: "",
//       address: "",
//       city: "",
//       state: "",
//       zipCode: "",
//       capacity: 1,
//       pricePerHour: 500,
//       amenities: "",  // String input that will be transformed to array on submit
//       images: "",     // String input that will be transformed to array on submit
//       category: "",
//     },
//   });

//   // Form submission handler
//   const onSubmit = async (values) => {
//     try {
//       const venueData = {
//         name: values.name,
//         description: values.description,
//         address: values.address,
//         city: values.city,
//         state: values.state,
//         zipCode: values.zipCode,
//         capacity: values.capacity,
//         pricePerHour: values.pricePerHour,
//         amenities: values.amenities, // This is now an array after transformation
//         images: values.images,       // This is now an array after transformation
//         category: values.category,
//         isAvailable: true,
//         rating: 0,
//         reviews: 0,
//       };
      
//       await createVenue(venueData);
//       navigate('/admin');
//     } catch (error) {
//       console.error("Failed to add venue:", error);
//       toast.error("Failed to add venue. Please try again.");
//     }
//   };

//   return (
//     <Card className="w-full max-w-4xl mx-auto">
//       <CardHeader>
//         <CardTitle>Add New Venue</CardTitle>
//         <CardDescription>Fill in the details to add a new venue to the platform</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Venue Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter venue name" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
              
//               <FormField
//                 control={form.control}
//                 name="category"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Category</FormLabel>
//                     <Select onValueChange={field.onChange} defaultValue={field.value}>
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select category" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value="wedding">Wedding Hall</SelectItem>
//                         <SelectItem value="conference">Conference Hall</SelectItem>
//                         <SelectItem value="banquet">Banquet Hall</SelectItem>
//                         <SelectItem value="party">Party Venue</SelectItem>
//                         <SelectItem value="exhibition">Exhibition Center</SelectItem>
//                         <SelectItem value="outdoor">Outdoor Venue</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
              
//               <FormField
//                 control={form.control}
//                 name="description"
//                 render={({ field }) => (
//                   <FormItem className="md:col-span-2">
//                     <FormLabel>Description</FormLabel>
//                     <FormControl>
//                       <Textarea 
//                         placeholder="Describe the venue" 
//                         {...field} 
//                         className="min-h-[120px]"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
              
//               <FormField
//                 control={form.control}
//                 name="address"
//                 render={({ field }) => (
//                   <FormItem className="md:col-span-2">
//                     <FormLabel>Address</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Street address" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
              
//               <FormField
//                 control={form.control}
//                 name="city"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>City</FormLabel>
//                     <FormControl>
//                       <Input placeholder="City" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
              
//               <FormField
//                 control={form.control}
//                 name="state"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>State</FormLabel>
//                     <FormControl>
//                       <Input placeholder="State" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
              
//               <FormField
//                 control={form.control}
//                 name="zipCode"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>ZIP Code</FormLabel>
//                     <FormControl>
//                       <Input placeholder="PIN Code" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
              
//               <FormField
//                 control={form.control}
//                 name="capacity"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Capacity</FormLabel>
//                     <FormControl>
//                       <Input type="number" min="1" placeholder="Max number of people" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
              
//               <FormField
//                 control={form.control}
//                 name="pricePerHour"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Price Per Hour (₹)</FormLabel>
//                     <FormControl>
//                       <Input type="number" min="1" placeholder="Hourly rate" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
              
//               <FormField
//                 control={form.control}
//                 name="amenities"
//                 render={({ field }) => (
//                   <FormItem className="md:col-span-2">
//                     <FormLabel>Amenities</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Wi-Fi, Parking, AC, etc. (comma separated)" {...field} />
//                     </FormControl>
//                     <FormDescription>
//                       Enter amenities separated by commas
//                     </FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
              
//               <FormField
//                 control={form.control}
//                 name="images"
//                 render={({ field }) => (
//                   <FormItem className="md:col-span-2">
//                     <FormLabel>Images</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Image URLs (comma separated)" {...field} />
//                     </FormControl>
//                     <FormDescription>
//                       Enter image URLs separated by commas
//                     </FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
            
//             <CardFooter className="flex justify-end gap-2 px-0">
//               <Button 
//                 type="button" 
//                 variant="outline" 
//                 onClick={() => navigate('/admin')}
//               >
//                 Cancel
//               </Button>
//               <Button type="submit">Add Venue</Button>
//             </CardFooter>
//           </form>
//         </Form>
//       </CardContent>
//     </Card>
//   );
// };

// export default AddVenueForm;
 















import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { createVenue } from '@/api/venueService';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

// Predefined list of cities (for the example)
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

// Define form validation schema
const venueFormSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  address: z.string().min(5, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  zipCode: z.string().min(5, { message: "Valid ZIP code is required" }),
  capacity: z.coerce.number().min(1, { message: "Capacity must be at least 1" }),
  pricePerHour: z.coerce.number().min(1, { message: "Price must be at least ₹1" }),
  amenities: z.array(z.string()).min(1, { message: "At least one amenity must be selected" }),
  images: z.array(z.instanceof(File)).min(1, { message: "At least one image must be uploaded" }),
  category: z.string().min(1, { message: "Category is required" }),
});

const AddVenueForm = () => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);
  
  // Initialize form
  const form = useForm({
    resolver: zodResolver(venueFormSchema),
    defaultValues: {
      name: "",
      description: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      capacity: 1,
      pricePerHour: 500,
      amenities: [], // Array of selected amenities
      images: [],    // Array of selected images (Files)
      category: "",
    },
  });

  // Handle file selection for images
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);
  };

  // Handle form submission
  const onSubmit = async (values) => {
    try {
      // Prepare form data for image upload
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('address', values.address);
      formData.append('city', values.city);
      formData.append('state', values.state);
      formData.append('zipCode', values.zipCode);
      formData.append('capacity', values.capacity);
      formData.append('pricePerHour', values.pricePerHour);
      formData.append('category', values.category);
      formData.append('isAvailable', true);
      formData.append('rating', 0);
      formData.append('reviews', 0);
      
      // Append amenities
      values.amenities.forEach(amenity => {
        formData.append('amenities[]', amenity);
      });

      // Append image files
      selectedImages.forEach((image, index) => {
        formData.append('images', image);
      });

      // Make the API call to upload venue data
      await createVenue(formData);
      navigate('/admin');
      toast.success('Venue created successfully!');
    } catch (error) {
      console.error('Error creating venue:', error);
      toast.error('Failed to create venue. Please try again.');
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Add New Venue</CardTitle>
        <CardDescription>Fill in the details to add a new venue to the platform</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Venue Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter venue name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding Hall</SelectItem>
                        <SelectItem value="conference">Conference Hall</SelectItem>
                        <SelectItem value="banquet">Banquet Hall</SelectItem>
                        <SelectItem value="party">Party Venue</SelectItem>
                        <SelectItem value="exhibition">Exhibition Center</SelectItem>
                        <SelectItem value="outdoor">Outdoor Venue</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe the venue" {...field} className="min-h-[120px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Street address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {cities.map((city, index) => (
                          <SelectItem key={index} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP Code</FormLabel>
                    <FormControl>
                      <Input placeholder="PIN Code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="capacity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Capacity</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter capacity" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pricePerHour"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price per Hour (₹)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter price" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormLabel>Amenities</FormLabel>
              <FormControl>
                <div className="grid grid-cols-3 gap-2">
                  <label>
                    <input
                      type="checkbox"
                      value="Wi-Fi"
                      onChange={(e) => {
                        if (e.target.checked) {
                          form.setValue("amenities", [...form.getValues("amenities"), "Wi-Fi"]);
                        } else {
                          form.setValue("amenities", form.getValues("amenities").filter((amenity) => amenity !== "Wi-Fi"));
                        }
                      }}
                    /> Wi-Fi
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Parking"
                      onChange={(e) => {
                        if (e.target.checked) {
                          form.setValue("amenities", [...form.getValues("amenities"), "Parking"]);
                        } else {
                          form.setValue("amenities", form.getValues("amenities").filter((amenity) => amenity !== "Parking"));
                        }
                      }}
                    /> Parking
                  </label>
                  {/* Add more amenities as needed */}
                </div>
              </FormControl>
              <FormMessage />
            </div>

            <div>
              <FormLabel>Images</FormLabel>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
              />
              <FormMessage />
            </div>

            <CardFooter>
              <Button type="submit" className="w-full">Create Venue</Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddVenueForm;
