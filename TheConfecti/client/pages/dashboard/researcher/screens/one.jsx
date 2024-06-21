// import React, { useState } from 'react';
// import { Modal, Button } from 'antd';
// import { useForm, Controller } from 'react-hook-form';
// import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '../../../../components/ui/input-otp';
// import { useAuth } from '../../../../authContext';
// import { joincfp } from '../../../../api/api';

// export default function InputOTPWithSeparator() {
//   const { currentUser } = useAuth();
//   const { handleSubmit, control, setValue, getValues } = useForm();
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [submittedValues, setSubmittedValues] = useState(null);
// const [message, setMessage] = useState(null);
//   const onSubmit = (data) => {
//     const otp = getValues('otp');
//     console.log('OTP:', otp);
//     setSubmittedValues(otp);
//     setIsModalVisible(true);
//   };

//   const handleOk = async() => {
//     try {
//       const response =  await joincfp({otp})
//       setMessage(response)
//       console.log(response)
//     } catch (error) {
//       console.log("error")
//     }
//     setIsModalVisible(false);
//   };

//   return (
//     <div className="w-full max-w-xs mx-auto">
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         <Controller
//           name="otp"
//           control={control}
//           render={({ field }) => (
//             <InputOTP maxLength={6} {...field}>
//               <InputOTPGroup>
//                 <InputOTPSlot index={0} />
//                 <InputOTPSlot index={1} />
//               </InputOTPGroup>
//               <InputOTPSeparator />
//               <InputOTPGroup>
//                 <InputOTPSlot index={2} />
//                 <InputOTPSlot index={3} />
//               </InputOTPGroup>
//               <InputOTPSeparator />
//               <InputOTPGroup>
//                 <InputOTPSlot index={4} />
//                 <InputOTPSlot index={5} />
//               </InputOTPGroup>
//             </InputOTP>
//           )}
//         />
//         <Button type="primary" htmlType="submit" className="w-full">
//           Submit
//         </Button>
//       </form>

//       <Modal
//         title="Submitted OTP"
//         visible={isModalVisible}
//         onOk={handleOk}
//         onCancel={() => setIsModalVisible(false)}
//       >
//         <p>{submittedValues}</p>
//         <h2>{message}</h2>
//       </Modal>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Modal, Button, message } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '../../../../components/ui/input-otp';
import { useAuth } from '../../../../authContext';
import { joinCFP } from '../../../../api/api';

export default function InputOTPWithSeparator() {
  const { currentUser } = useAuth();
  const { handleSubmit, control, getValues } = useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [submittedValues, setSubmittedValues] = useState(null);
  const [loading, setLoading] = useState(false);
  const user_id = currentUser ? currentUser._id : null;

  const onSubmit = async (data) => {
    const otp = getValues('otp');
    console.log('OTP:', otp);
    setSubmittedValues(otp);
    setIsModalVisible(true);
 try {
      setLoading(true);
      const response = await joinCFP(otp, user_id);
      console.log('API Response:', response);
      message.success('Joining code verified successfully');
    } catch (error) {
      message.error('Error joining CFP');
    } finally {
      setLoading(false);
    }
    // try {
    //   setLoading(true);
    //   const response = await joinCFP({otp,_id});
    //   console.log('API Response:', response);
    //   message.success('Joining code verified successfully');
    // } catch (error) {
    //   message.error('Error joining CFP');
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Controller
          name="otp"
          control={control}
          render={({ field }) => (
            <InputOTP maxLength={6} {...field}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          )}
        />
        <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
          Submit
        </Button>
      </form>

      <Modal
        title="Submitted OTP"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>{submittedValues}</p>
      </Modal>
    </div>
  );
}
