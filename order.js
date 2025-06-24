
    document.getElementById('trackForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const orderId = document.getElementById('orderId').value.trim();
      const phoneNumber = document.getElementById('phoneNumber').value.trim();

      // You can replace this with your own backend tracking logic
      alert(`Tracking Order:\nOrder ID: ${orderId}\nPhone Number: ${phoneNumber}`);
    });
