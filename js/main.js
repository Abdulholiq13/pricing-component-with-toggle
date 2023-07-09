const elPaymentPeriodRadio = document.querySelectorAll('[name="payment_period"]');
const elPricingPlanValue = document.querySelectorAll('.pricing-plan-value');

elPaymentPeriodRadio.forEach(function (elPaymentPeriodRadio) {
  elPaymentPeriodRadio.addEventListener('change', function () {
    const period = elPaymentPeriodRadio.value;
    
    if (period === 'annual') {
      elPricingPlanValue.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentAnnual;
      });
    } else {
      elPricingPlanValue.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentMonthly;
      });
    }
  });
});