<template>
  <div class="contact_info">
    <div class="contact_info_section">
      <div class="contact_info_title">Marketing</div>
      <ul>
        <li>Phone: <span>+53 345 7953 3245</span></li>
        <li>Email: <span>yourmail@gmail.com</span></li>
      </ul>
    </div>
    <div class="contact_info_section">
      <div class="contact_info_title">Shippiing & Returns</div>
      <ul>
        <li>Phone: <span>+53 345 7953 3245</span></li>
        <li>Email: <span>yourmail@gmail.com</span></li>
      </ul>
    </div>
    <div class="contact_info_section">
      <div class="contact_info_title">Information</div>
      <ul>
        <li>Phone: <span>+53 345 7953 3245</span></li>
        <li>Email: <span>yourmail@gmail.com</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
};
</script>

<style>
.contact_info_section:not(:first-child) {
  margin-top: 74px;
}
.contact_info_title {
  font-size: 18px;
  font-weight: 500;
  color: #1b1b1b;
}
.contact_info_section ul {
  margin-top: 46px;
}
.contact_info_section ul li {
  font-size: 14px;
  font-weight: 400;
  color: #1b1b1b;
}
.contact_info_section ul li:not(:last-child) {
  margin-bottom: 7px;
}
.contact_info_section ul li span {
  color: #6c6a74;
  margin-left: 8px;
}
</style>