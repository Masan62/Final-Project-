document.addEventListener("DOMContentLoaded", () => {
    const workoutBtn = document.querySelector(".workout-btn");
  
    if (workoutBtn) {
      workoutBtn.addEventListener("click", () => {
        window.location.href = "workout.html"; // Navigate to second page
      });
    } else {
      console.log("Workout button not found");
    }
  });
  