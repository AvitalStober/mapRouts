// "use client";
// import { useState, useRef } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // יצירת אייקון מותאם אישית
// const customIcon = L.icon({
//   iconUrl: "/location-mark.png", 
//   iconSize: [38, 38], 
//   iconAnchor: [19, 38],
//   popupAnchor: [0, -38],
// });

// const Map = () => {
//   const [departurePosition, setDeparturePosition] = useState<L.LatLngTuple>([32.0853, 34.7818]); // תל אביב ברירת מחדל
//   const [destinationPosition, setDestinationPosition] = useState<L.LatLngTuple>([32.0808, 34.7794]); // כתובת הגעה ברירת מחדל
//   const [departureAddress, setDepartureAddress] = useState("");
//   const [destinationAddress, setDestinationAddress] = useState("");

//   const departureInputRef = useRef<HTMLInputElement>(null);
//   const destinationInputRef = useRef<HTMLInputElement>(null);

//   // פונקציה לקבלת קואורדינטות על פי כתובת
//   const getCoordinates = async (address: string, setPosition: React.Dispatch<React.SetStateAction<L.LatLngTuple>>) => {
//     if (!address) return;

//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&addressdetails=1&limit=1`
//       );
//       const data = await response.json();
//       if (data && data[0]) {
//         const { lat, lon } = data[0];
//         // מוודאים שהקואורדינטות הם LatLngTuple (מערך עם שני ערכים)
//         setPosition([parseFloat(lat), parseFloat(lon)] as L.LatLngTuple); 
//       } else {
//         alert("לא נמצאה כתובת כזו.");
//       }
//     } catch (error) {
//       alert("אירעה שגיאה בחיבור לשרת.");
//       console.error(error);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (departureAddress) getCoordinates(departureAddress, setDeparturePosition);
//     if (destinationAddress) getCoordinates(destinationAddress, setDestinationPosition);

//     // לאחר שליחת הכתובת, להחזיר את הפוקוס לשדה הקלט
//     if (departureInputRef.current) departureInputRef.current.focus();
//     if (destinationInputRef.current) destinationInputRef.current.focus();
//   };

//   // קומפוננטת useMap שתשנה את גבולות המפה
//   function ChangeMapView() {
//     const map = useMap();

//     // מחשבים את הגבולות כך שיכסו את שתי הנקודות
//     const bounds = L.latLngBounds([departurePosition, destinationPosition]);

//     // ממקמים את המפה כך שתכסה את הגבולות של שתי הנקודות
//     map.fitBounds(bounds, { padding: [50, 50] }); // מוסיף padding להבטיח שהנקודות לא יהיו בצמוד לקצוות המפה
//     return null;
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "10px" }}>
//           <input
//             type="text"
//             value={departureAddress}
//             onChange={(e) => setDepartureAddress(e.target.value)}
//             placeholder="הכנס כתובת יציאה"
//             style={{ padding: "10px", marginRight: "10px" }}
//             ref={departureInputRef}
//           />
//           <input
//             type="text"
//             value={destinationAddress}
//             onChange={(e) => setDestinationAddress(e.target.value)}
//             placeholder="הכנס כתובת הגעה"
//             style={{ padding: "10px" }}
//             ref={destinationInputRef}
//           />
//         </div>
//         <button type="submit" style={{ padding: "10px" }}>חפש</button>
//       </form>

//       <MapContainer
//         center={departurePosition}
//         zoom={13}
//         style={{ width: "100%", height: "500px" }}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
//         {/* מרקר של יציאה */}
//         <Marker position={departurePosition} icon={customIcon}>
//           <Popup>כתובת יציאה</Popup>
//         </Marker>
        
//         {/* מרקר של הגעה */}
//         <Marker position={destinationPosition} icon={customIcon}>
//           <Popup>כתובת הגעה</Popup>
//         </Marker>

//         {/* הקומפוננטה שמבצעת את התאמת הגבולות */}
//         <ChangeMapView />
//       </MapContainer>
//     </div>
// //   );
// // };

// // export default Map;



// "use client";
// import { useState, useRef } from "react";
// import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // יצירת אייקון מותאם אישית
// const customIcon = L.icon({
//   iconUrl: "/location-mark.png", 
//   iconSize: [38, 38], 
//   iconAnchor: [19, 38],
//   popupAnchor: [0, -38],
// });

// const Map = () => {
//   const [departurePosition, setDeparturePosition] = useState<L.LatLngTuple>([32.0853, 34.7818]); // תל אביב ברירת מחדל
//   const [destinationPosition, setDestinationPosition] = useState<L.LatLngTuple>([32.0808, 34.7794]); // כתובת הגעה ברירת מחדל
//   const [departureAddress, setDepartureAddress] = useState("");
//   const [destinationAddress, setDestinationAddress] = useState("");

//   const departureInputRef = useRef<HTMLInputElement>(null);
//   const destinationInputRef = useRef<HTMLInputElement>(null);

//   // פונקציה לקבלת קואורדינטות על פי כתובת
//   const getCoordinates = async (address: string, setPosition: React.Dispatch<React.SetStateAction<L.LatLngTuple>>) => {
//     if (!address) return;

//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&addressdetails=1&limit=1`
//       );
//       const data = await response.json();
//       if (data && data[0]) {
//         const { lat, lon } = data[0];
//         // מוודאים שהקואורדינטות הם LatLngTuple (מערך עם שני ערכים)
//         setPosition([parseFloat(lat), parseFloat(lon)] as L.LatLngTuple); 
//       } else {
//         alert("לא נמצאה כתובת כזו.");
//       }
//     } catch (error) {
//       alert("אירעה שגיאה בחיבור לשרת.");
//       console.error(error);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (departureAddress) getCoordinates(departureAddress, setDeparturePosition);
//     if (destinationAddress) getCoordinates(destinationAddress, setDestinationPosition);

//     // לאחר שליחת הכתובת, להחזיר את הפוקוס לשדה הקלט
//     if (departureInputRef.current) departureInputRef.current.focus();
//     if (destinationInputRef.current) destinationInputRef.current.focus();
//   };

//   // קומפוננטת useMap שתשנה את גבולות המפה
//   function ChangeMapView() {
//     const map = useMap();

//     // מחשבים את הגבולות כך שיכסו את שתי הנקודות
//     const bounds = L.latLngBounds([departurePosition, destinationPosition]);

//     // ממקמים את המפה כך שתכסה את הגבולות של שתי הנקודות
//     map.fitBounds(bounds, { padding: [50, 50] }); // מוסיף padding להבטיח שהנקודות לא יהיו בצמוד לקצוות המפה
//     return null;
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "10px" }}>
//           <input
//             type="text"
//             value={departureAddress}
//             onChange={(e) => setDepartureAddress(e.target.value)}
//             placeholder="הכנס כתובת יציאה"
//             style={{ padding: "10px", marginRight: "10px" }}
//             ref={departureInputRef}
//           />
//           <input
//             type="text"
//             value={destinationAddress}
//             onChange={(e) => setDestinationAddress(e.target.value)}
//             placeholder="הכנס כתובת הגעה"
//             style={{ padding: "10px" }}
//             ref={destinationInputRef}
//           />
//         </div>
//         <button type="submit" style={{ padding: "10px" }}>חפש</button>
//       </form>

//       <MapContainer
//         center={departurePosition}
//         zoom={13}
//         style={{ width: "100%", height: "500px" }}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
//         {/* מרקר של יציאה */}
//         <Marker position={departurePosition} icon={customIcon}>
//           <div style={{ textAlign: "center", marginTop: "20px", fontSize: "12px" }}>יציאה</div>
//         </Marker>
        
//         {/* מרקר של הגעה */}
//         <Marker position={destinationPosition} icon={customIcon}>
//           <div style={{ textAlign: "center", marginTop: "20px", fontSize: "12px" }}>יעד</div>
//         </Marker>

//         {/* הקומפוננטה שמבצעת את התאמת הגבולות */}
//         <ChangeMapView />
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;




"use client";
import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// יצירת אייקון מותאם אישית עם DivIcon
const createIcon = (text: string) =>
  L.divIcon({
    className: "custom-icon",
    html: `
      <div style="text-align: center; font-size: 12px; font-weight: bold; color: black;">
        <img src="/location-mark.png" style="width: 38px; height: 38px;" alt="icon" />
        <div style="margin-top: 5px;">${text}</div>
      </div>`,
    iconSize: [38, 38], // גודל האייקון (רוחב, גובה)
    iconAnchor: [19, 38], // נקודת העיגון של האייקון
    popupAnchor: [0, -38], // מיקום ה-popup יחסית לאייקון
  });

const Map = () => {
  const [departurePosition, setDeparturePosition] = useState<L.LatLngTuple>([32.0853, 34.7818]); // תל אביב ברירת מחדל
  const [destinationPosition, setDestinationPosition] = useState<L.LatLngTuple>([32.0808, 34.7794]); // כתובת הגעה ברירת מחדל
  const [departureAddress, setDepartureAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");

  const departureInputRef = useRef<HTMLInputElement>(null);
  const destinationInputRef = useRef<HTMLInputElement>(null);

  // פונקציה לקבלת קואורדינטות על פי כתובת
  const getCoordinates = async (address: string, setPosition: React.Dispatch<React.SetStateAction<L.LatLngTuple>>) => {
    if (!address) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&addressdetails=1&limit=1`
      );
      const data = await response.json();
      if (data && data[0]) {
        const { lat, lon } = data[0];
        setPosition([parseFloat(lat), parseFloat(lon)] as L.LatLngTuple); 
      } else {
        alert("לא נמצאה כתובת כזו.");
      }
    } catch (error) {
      alert("אירעה שגיאה בחיבור לשרת.");
      console.error(error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (departureAddress) getCoordinates(departureAddress, setDeparturePosition);
    if (destinationAddress) getCoordinates(destinationAddress, setDestinationPosition);

    // לאחר שליחת הכתובת, להחזיר את הפוקוס לשדה הקלט
    if (departureInputRef.current) departureInputRef.current.focus();
    if (destinationInputRef.current) destinationInputRef.current.focus();
  };

  // קומפוננטת useMap שתשנה את גבולות המפה
  function ChangeMapView() {
    const map = useMap();

    const bounds = L.latLngBounds([departurePosition, destinationPosition]);

    // ממקמים את המפה כך שתכסה את הגבולות של שתי הנקודות
    map.fitBounds(bounds, { padding: [50, 50] });
    return null;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={departureAddress}
            onChange={(e) => setDepartureAddress(e.target.value)}
            placeholder="הכנס כתובת יציאה"
            style={{ padding: "10px", marginRight: "10px" }}
            ref={departureInputRef}
          />
          <input
            type="text"
            value={destinationAddress}
            onChange={(e) => setDestinationAddress(e.target.value)}
            placeholder="הכנס כתובת הגעה"
            style={{ padding: "10px" }}
            ref={destinationInputRef}
          />
        </div>
        <button type="submit" style={{ padding: "10px" }}>חפש</button>
      </form>

      <MapContainer
        center={departurePosition}
        zoom={13}
        style={{ width: "100%", height: "500px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        {/* מרקר של יציאה */}
        <Marker position={departurePosition} icon={createIcon("יציאה")} />

        {/* מרקר של הגעה */}
        <Marker position={destinationPosition} icon={createIcon("יעד")} />

        {/* הקומפוננטה שמבצעת את התאמת הגבולות */}
        <ChangeMapView />
      </MapContainer>
    </div>
  );
};

export default Map;
