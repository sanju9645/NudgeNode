// Function to check the presence of the token cookie

const checkToken = async () => {
  try {
    const response = await fetch('/check-token');
    const data = await response.json();

    if (data.token) {
      // Proceed with the necessary actions
    } else {
      // Handle the case where the token cookie is not present
      logoutUser();
    }
  } catch (error) {
    console.error('Error checking token:', error);
  }
}

function logoutUser() {
  window.location.href = '/logout';
}

// Check token existence periodically, e.g., every 5 minutes
setInterval(checkToken, 300000);
// setInterval(checkToken, 60000);
