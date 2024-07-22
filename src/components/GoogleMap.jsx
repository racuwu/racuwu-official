import React from 'react';

const GoogleMapComponent = () => {
  return (
    <div className="w-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15840.885356189732!2d81.0793705!3d6.9831861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4618a1a9fec37%3A0x1dd900702229654b!2sUva%20Wellassa%20University%20of%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1713384002410!5m2!1sen!2slk"
      style={{ width: '100%', height: '300px', border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
  </div>
  );
};

export default GoogleMapComponent;
