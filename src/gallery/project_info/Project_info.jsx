import React from "react";
import img from "../assets/upload_img.png";
function Project_info() {
  return (
    <>
      <div className="Conatiner">
        <div style={{ textAlign: "center" }}>
          <div>
            <h3>React Images Uploading</h3>
          </div>
          <div>
            <p>
              The simple images uploader applied Render Props pattern. (You can
              read more about this pattern here).
            </p>
            <p>
              This approach allows you to fully control UI component and
              behaviours.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div>
            <h3>Installation</h3>
          </div>
          <div>
            <div class="command">
              <pre>npm install --save react-images-uploading</pre>
            </div>
          </div>
          <div>
            <a href="https://www.npmjs.com/package/react-images-uploading">
              React Images Uploading
            </a>
          </div>
        </div>

        <div>
          <div>
            <p style={{ textAlign: "center", marginTop: "30px" }}>
              © Images Uploder 2024 | Designed by Sudhanshu Gaikwad
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project_info;
