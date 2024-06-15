
// import React, { useState } from 'react';

// function TaskItem({ task, updateTask, deleteTask, toggleEditing }) {
//   const [newText, setNewText] = useState(task.text);

//   const handleUpdate = () => {
//     updateTask(task.id, newText);
//   };

//   return (
//     <li style={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '10px',
//       borderBottom: '1px solid #ccc',
//       listStyleType: 'none',
//       borderRadius: '8px', // Rounded corners for the task item
//       marginBottom: '10px', // Margin between task items
//       backgroundColor: 'white',
//     }}>
//       {task.isEditing ? (
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           width: '100%',
//         }}>
//           <input
//             type="text"
//             style={{
//               flex: '1 1 auto',
//               padding: '5px',
//               margin: '5px 0',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//             }}
//             value={newText}
//             onChange={(e) => setNewText(e.target.value)}
//           />
//           <button
//             style={{
//               backgroundColor: '#28a745',
//               color: '#fff',
//               border: 'none',
//               padding: '5px 10px',
//               margin: '5px 5px 5px 10px',
//               cursor: 'pointer',
//               borderRadius: '4px',
//             }}
//             onClick={handleUpdate}
//           >
//             Save
//           </button>
//           <button
//             style={{
//               backgroundColor: '#6c757d',
//               color: '#fff',
//               border: 'none',
//               padding: '5px 10px',
//               margin: '5px',
//               cursor: 'pointer',
//               borderRadius: '4px',
//             }}
//             onClick={() => toggleEditing(task.id)}
//           >
//             Cancel
//           </button>
//         </div>
//       ) : (
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           width: '100%',
//           padding: '10px',
//         }}>
//           <p style={{
//             flex: '1 1 auto',
//             margin: '0 10px 0 0',
//             wordWrap: 'break-word',
//             textAlign: 'left',
//           }}>
//             {task.text}
//           </p>
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             marginLeft: 'auto',
//           }}>
//             <button
//               style={{
//                 backgroundColor: '#ffc107',
//                 color: '#fff',
//                 border: 'none',
//                 padding: '5px 10px',
//                 margin: '5px',
//                 cursor: 'pointer',
//                 borderRadius: '4px',
//               }}
//               onClick={() => toggleEditing(task.id)}
//             >
//               Edit
//             </button>
//             <button
//               style={{
//                 backgroundColor: '#dc3545',
//                 color: '#fff',
//                 border: 'none',
//                 padding: '5px 10px',
//                 margin: '5px',
//                 cursor: 'pointer',
//                 borderRadius: '4px',
//               }}
//               onClick={() => deleteTask(task.id)}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       )}
//     </li>
//   );
// }

// export default TaskItem;
import React, { useState } from 'react';

function TaskItem({ task, updateTask, deleteTask, toggleEditing }) {
  const [newText, setNewText] = useState(task.text);

  const handleUpdate = () => {
    updateTask(task.id, newText);
  };

  return (
    <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '5px',
      borderRadius: '6px',
      marginBottom: '8px',
      backgroundColor: 'white',
      boxShadow: '0 0 4px rgba(0,0,0,0.1)', // Optional: Adds a subtle shadow
    }}>
      {task.isEditing ? (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}>
          <input
            type="text"
            style={{
              flex: '1',
              padding: '4px',
              margin: '4px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button
            style={{
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              padding: '4px 8px',
              margin: '0 4px',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
            onClick={handleUpdate}
          >
            Save
          </button>
          <button
            style={{
              backgroundColor: '#6c757d',
              color: '#fff',
              border: 'none',
              padding: '4px 8px',
              margin: '0 4px',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
            onClick={() => toggleEditing(task.id)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          padding: '4px',
        }}>
          <p style={{
            flex: '1',
            margin: '0 8px 0 0',
            wordWrap: 'break-word',
            textAlign: 'left',
          }}>
            {task.text}
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <button
              style={{
                backgroundColor: '#ffc107',
                color: '#fff',
                border: 'none',
                padding: '4px 8px',
                margin: '0 4px',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
              onClick={() => toggleEditing(task.id)}
            >
              Edit
            </button>
            <button
              style={{
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                padding: '4px 8px',
                margin: '0 4px',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default TaskItem;
