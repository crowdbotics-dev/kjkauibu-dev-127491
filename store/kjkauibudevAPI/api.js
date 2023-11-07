import axios from "axios"
const kjkauibudevAPI = axios.create({
  baseURL: "https://kjkauibu-dev-127491.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return kjkauibudevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_fffsefe_list(payload) {
  return kjkauibudevAPI.get(`/api/v1/fffsefe/`)
}
function api_v1_fffsefe_create(payload) {
  return kjkauibudevAPI.post(`/api/v1/fffsefe/`, payload)
}
function api_v1_fffsefe_retrieve(payload) {
  return kjkauibudevAPI.get(`/api/v1/fffsefe/${payload.id}/`)
}
function api_v1_fffsefe_update(payload) {
  return kjkauibudevAPI.put(`/api/v1/fffsefe/${payload.id}/`, payload)
}
function api_v1_fffsefe_partial_update(payload) {
  return kjkauibudevAPI.patch(`/api/v1/fffsefe/${payload.id}/`, payload)
}
function api_v1_fffsefe_destroy(payload) {
  return kjkauibudevAPI.delete(`/api/v1/fffsefe/${payload.id}/`)
}
function api_v1_kungshu_list(payload) {
  return kjkauibudevAPI.get(`/api/v1/kungshu/`)
}
function api_v1_kungshu_create(payload) {
  return kjkauibudevAPI.post(`/api/v1/kungshu/`, payload)
}
function api_v1_kungshu_retrieve(payload) {
  return kjkauibudevAPI.get(`/api/v1/kungshu/${payload.id}/`)
}
function api_v1_kungshu_update(payload) {
  return kjkauibudevAPI.put(`/api/v1/kungshu/${payload.id}/`, payload)
}
function api_v1_kungshu_partial_update(payload) {
  return kjkauibudevAPI.patch(`/api/v1/kungshu/${payload.id}/`, payload)
}
function api_v1_kungshu_destroy(payload) {
  return kjkauibudevAPI.delete(`/api/v1/kungshu/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return kjkauibudevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return kjkauibudevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return kjkauibudevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return kjkauibudevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return kjkauibudevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return kjkauibudevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return kjkauibudevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return kjkauibudevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return kjkauibudevAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return kjkauibudevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return kjkauibudevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return kjkauibudevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return kjkauibudevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_fffsefe_list,
  api_v1_fffsefe_create,
  api_v1_fffsefe_retrieve,
  api_v1_fffsefe_update,
  api_v1_fffsefe_partial_update,
  api_v1_fffsefe_destroy,
  api_v1_kungshu_list,
  api_v1_kungshu_create,
  api_v1_kungshu_retrieve,
  api_v1_kungshu_update,
  api_v1_kungshu_partial_update,
  api_v1_kungshu_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
