class ApiResponse {
  constructor(data, message, statusCode = "success ") {
    this.data = data;
    this.message = message;
    // Informational responses ( 100-199 )
    // Successful responses ( 200-299)
    // Redirection messages ( 300-399)
    // Client error responses ( 400-499)
    // Server error responses ( 500-599)
    this.success = statusCode < 400
  }
}
