import React, { useEffect, useState } from 'react';
import { getCFP } from '../../../../api/api';
import { useAuth } from '../../../../authContext';

function Three() {
  const { currentUser } = useAuth();
  const id = currentUser ? currentUser.CFPid : null;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCFP(id);
        console.log(response);
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{data.conferenceName}</h1>
      <p className="text-gray-700 mb-2"><strong>Type:</strong> {data.type}</p>
      <p className="text-gray-700 mb-2"><strong>Acronym:</strong> {data.acronym}</p>
      <p className="text-gray-700 mb-2"><strong>Webpage:</strong> <a href={`http://${data.webpage}`} className="text-blue-500">{data.webpage}</a></p>
      <p className="text-gray-700 mb-2"><strong>Address:</strong> {data.address}, {data.country}</p>
      <p className="text-gray-700 mb-2"><strong>Start Date:</strong> {new Date(data.startDate).toLocaleDateString()}</p>
      <p className="text-gray-700 mb-2"><strong>End Date:</strong> {new Date(data.endDate).toLocaleDateString()}</p>
      <p className="text-gray-700 mb-2"><strong>Abstract Deadline:</strong> {new Date(data.abstractDeadline).toLocaleDateString()}</p>
      <p className="text-gray-700 mb-2"><strong>Submission Deadline:</strong> {new Date(data.submissionDeadline).toLocaleDateString()}</p>
      <p className="text-gray-700 mb-2"><strong>Primary Area:</strong> {data.primaryArea}</p>
      <p className="text-gray-700 mb-2"><strong>Secondary Area:</strong> {data.secondaryArea}</p>
      <p className="text-gray-700 mb-2"><strong>Other:</strong> {data.other}</p>
      <p className="text-gray-700 mb-2"><strong>Topics:</strong> {data.topics}</p>
      <p className="text-gray-700 mb-2"><strong>Executive Chair Name:</strong> {data.ECname}</p>
      <p className="text-gray-700 mb-2"><strong>Executive Chair Email:</strong> <a href={`mailto:${data.ECemail}`} className="text-blue-500">{data.ECemail}</a></p>
      <p className="text-gray-700"><strong>CFP Joining Code:</strong> {data.CFPjoiningcode}</p>
    </div>
  );
}

export default Three;
