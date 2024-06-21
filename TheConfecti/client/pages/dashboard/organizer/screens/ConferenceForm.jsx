
import React, { useState } from 'react';
import { List,Modal } from 'antd';
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import {Textarea} from "../../../../components/ui/textarea";
import { createCFP } from '../../../../api/api';
import { useAuth } from '../../../../authContext';


function generateSixDigitNumber() {
  const min = 100000; // Lower bound (inclusive)
  const max = 999999; // Upper bound (inclusive)
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum.toString().padStart(6, "0"); // Pad with leading zeros if needed
}

export default function ConferenceForm() {
const { currentUser } = useAuth();
  const randomString = generateSixDigitNumber();
  const headings = Array.from({ length: 20 }, (_, i) => `CallForPublication ${i + 1}`);

  const [formData, setFormData] = useState({
    Oid: currentUser ? currentUser._id : null,
    type: '',
    conferenceName: '',
    acronym: '',
    webpage: '',
    address: '',
    country: '',
    startDate: '',
    endDate: '',
    abstractDeadline: '',
    submissionDeadline: '',
    primaryArea: '',
    secondaryArea: '',
    other: '',
    topics: '',
    ECname: '',
    ECemail: '',
    CFPjoiningcode: randomString,
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCFPModalVisible, setIsCFPModalVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let topics = [...formData.topics];
    if (checked) {
      topics.push(name);
    } else {
      topics = topics.filter((topic) => topic !== name);
    }
    setFormData({ ...formData, topics });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for incomplete fields
    const incompleteFields = Object.keys(formData).filter((key) => !formData[key]);

    if (incompleteFields.length > 0) {
      // Show modal if there are incomplete fields
      setIsModalVisible(true);
    } else {
      try {
        const response = await createCFP(formData);
        if (response) {
          // Show CFP modal and reset form
          setIsCFPModalVisible(true);
          setFormData({
            Oid: currentUser._id,
            type: '',
            conferenceName: '',
            acronym: '',
            webpage: '',
            address: '',
            country: '',
            startDate: '',
            endDate: '',
            abstractDeadline: '',
            submissionDeadline: '',
            primaryArea: '',
            secondaryArea: '',
            other: '',
            topics: '',
            ECname: '',
            ECemail: '',
            CFPjoiningcode: generateSixDigitNumber(),
          });
        }
      } catch (error) {
        console.error('Registration error:', error);
      }
    }
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <fieldset >
            <legend style={{paddingBottom:'30px'}}>Basic Information</legend>
            
            <div>
              <Label style={{marginBottom: '10px'}}>Type</Label>
              <br></br>
              <Input
              style={{marginTop:"10px", marginBottom: '10px'}}
                type="text"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label style={{marginBottom: '10px'}}>Conference Name</Label>
              <br></br>
              <Input
              style={{marginTop:"10px", marginBottom: '10px'}}
                type="text"
                name="conferenceName"
                value={formData.conferenceName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label style={{marginBottom: '10px'}}>Acronym</Label>
              <br></br>
              <Input
              style={{marginTop:"10px", marginBottom: '10px'}}
                type="text"
                name="acronym"
                value={formData.acronym}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label style={{marginBottom: '10px'}}>Webpage</Label>
              <br></br>
              <Input
              style={{marginTop:"10px", marginBottom: '10px'}}
                type="text"
                name="webpage"
                value={formData.webpage}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label style={{marginBottom: '10px'}}>Address</Label>
              <br></br>
              <Input
              style={{marginTop:"10px", marginBottom: '10px'}}
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label style={{marginBottom: '10px'}}>Country Name</Label>
              <br></br>
              <Input
              style={{marginTop:"10px", marginBottom: '10px'}}
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </div>
          </fieldset>
        );
      case 2:
        return (
          <fieldset>
            <legend style={{paddingBottom:'30px'}}>Dates and Deadlines</legend>
            <div>
              <Label style={{marginBottom: '10px'}}>Start Date</Label>
              <br></br>
              <Input
              style={{marginTop:"10px", marginBottom: '10px'}}
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label style={{marginBottom: '10px'}}>End Date</Label>
              <br></br>
              <Input
              style={{marginTop:"10px", marginBottom: '10px'}}
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label style={{marginBottom: '10px'}}>Abstract Deadline</Label>
              <br></br>
              <Input
              style={{marginTop:"10px", marginBottom: '10px'}}
                type="date"
                name="abstractDeadline"
                value={formData.abstractDeadline}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label style={{marginBottom: '10px'}}>Submission Deadline</Label>
              <br></br>
              <Input
              style={{marginTop:"10px", marginBottom: '10px'}}
                type="date"
                name="submissionDeadline"
                value={formData.submissionDeadline}
                onChange={handleInputChange}
                required
              />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </fieldset>
        );
      case 3:
        return (
          <fieldset>
            <legend style={{paddingBottom:'30px'}}>Areas and Topics</legend>
            <div>
              <Label style={{marginBottom: '10px'}}>Primary Area:</Label>
              <br></br>
              <Input
              style={{marginTop:"10px", marginBottom: '10px'}}
                type="text"
                name="primaryArea"
                value={formData.primaryArea}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label style={{marginBottom: '10px'}}>Secondary Area</Label>
              <br></br>
              <Input
              style={{marginTop:"10px", marginBottom: '10px'}}
                type="text"
                name="secondaryArea"
                value={formData.secondaryArea}
                onChange={handleInputChange}
                required
              />
            </div>
             <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </fieldset>
        );
      case 4:
        return (
          <fieldset>
            <legend style={{paddingBottom:'30px'}}>Organizing Committee</legend>
            <div>
              <Label style={{marginBottom: '10px'}}>Editorial Coordinator Name</Label>
              <br></br>
              <Input
              style={{marginTop:"10px", marginBottom: '10px'}}
                type="text"
                name="ECname"
                value={formData.ECname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label style={{marginBottom: '10px'}} >Editorial Coordinator Email</Label>
              <br></br>
              <Input
              style={{marginTop:"10px", marginBottom: '10px'}}
                type="email"
                name="ECemail"
                value={formData.ECemail}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label style={{marginBottom: '10px'}}>Topics</Label>
              <br></br>
              <Textarea
              style={{marginTop:"10px", marginBottom: '10px'}}
                type="text"
                name="topics"
                value={formData.topics}
                onChange={handleInputChange}
                required
              />
            </div>
             <div>
              <Label style={{marginBottom: '10px'}}>Other</Label>
              <br></br>
              <Textarea
              style={{marginTop:"10px", marginBottom: '10px'}}
                type="text"
                name="other"
                value={formData.other}
                onChange={handleInputChange}
              />
            </div>
            <br></br>
            <br></br>
            <br></br>
          </fieldset>
        );
      default:
        return null;
    }
  };

  return (
    <div>
    
    <div >
      <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px', marginRight: '140px' }}>
          {[1, 2, 3, 4].map(step => (
            <div key={step} style={{ color: currentStep === step ? 'blue' : 'black' }}>steps {step} | </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} style={{ height: '500px',width: '700px'  }}>
        {renderFormStep()}
        <div className="flex justify-between">
          {currentStep > 1 && (
            
            <Button
            style={{marginTop: '20px'}}
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
               variant="outline"
            //   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Previous
            </Button>
            
          )}
          {currentStep < 4 && (
          
            <Button
             style={{marginTop: '20px'}}
             variant="outline"
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
              // className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Next
            </Button>
        
          )}
          {currentStep === 4 && (
            
            <Button
             style={{marginTop: '20px'}}
              type="submit"
              // className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Submit
            </Button>
          )}
        </div>
      </form>
      
    </div>
    <div style={{backgroundColor: 'white', marginLeft: '740px', height:'550px', marginTop: '-450px'}}>
            <List
      itemLayout="horizontal"
      dataSource={headings}
      renderItem={(CallForPublication) => (
        <List.Item>
          <List.Item.Meta title={CallForPublication} />
        </List.Item>
      )}
      style={{ height: '100%', overflow: 'auto' }} // Set height and overflow for scrolling
    />
      </div>
      <Modal
      title="Information"
      visible={isModalVisible}
      onCancel={() => setIsModalVisible(false)}
      footer={null} // Remove default footer with OK button
    >
      please fill all fields!
    </Modal>
          <Modal
      title="CFP created successfully!"
      visible={isCFPModalVisible}
      onCancel={() => setIsCFPModalVisible(false)}
      footer={null} // Remove default footer with OK button
    >
      Email Seneded to Editorial Coordinator!
    </Modal>
    </div>
  );
}



