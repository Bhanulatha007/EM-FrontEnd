import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "orange", textAlign: "center", color: "white", padding: "10px" }}>
      
      <div className="w-full grid grid-cols-12">
        
        {/* Column 1 */}
        <div className="col-span-4">
          <h2 style={{ fontStyle: "italic", color: "white" }}>Quick Links</h2>
          <ul style={{ listStyle: "none", padding: 0, fontStyle: "italic", fontSize: "15px" }}>
            <li>Home</li>
            <li>My Profile</li>
            <li>Benefits & Policies</li>
            <li>Payroll & Compensation</li>
            <li>Time & Attendance</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="col-span-4">
          <h2 style={{ fontStyle: "italic", color: "white" }}>Resources</h2>
          <ul style={{ listStyle: "none", padding: 0, fontStyle: "italic", fontSize: "15px" }}>
            <li>HR Documents</li>
            <li>Company Directory</li>
            <li>Training & Development</li>
            <li>IT Support</li>
            <li>Wellness Programs</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-span-4">
          <h2 style={{ fontStyle: "italic", color: "white" }}>Contact Us</h2>
          <ul style={{ listStyle: "none", padding: 0, fontStyle: "italic", fontSize: "15px" }}>
            <li>Email: 50@gmail.com</li>
            <li>Phone: 5050505050</li>
            <li>Address: 123 Main Street</li>
            <li>Pincode: 532421</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div style={{ textAlign: "center", marginTop: "20px", borderTop: "1px solid #334155", paddingTop: "10px", fontSize: "15px" }}>
        <p>© 2026 Employee Portal. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
