class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  helper_method :resource_name, :resource, :devise_mapping, :resource_class

  def resource_name
    :user
  end

  def resource
    @resource ||= User.new
  end

  def resource_class
    User
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end

  def after_sign_in_path_for(resource_or_scope)
    if request.referrer.include? "search?q="
      return request.referrer
    elsif request.referrer.include? "search/"
      q_ind = request.referrer.index("?q=")
      return '/search' + request.referrer[q_ind..-1]
    elsif !(/sign_in$/ =~ request.referrer).nil? || !(/sign_up$/ =~ request.referrer).nil?
      return '/'
    else
      return request.referrer
    end
  end

  def index
    if request.query_string.length > 0
      redirect_to "/search?#{request.query_string}"
    elsif request.path[0..-3] == "/profile"
      redirect_to '/profile'
    else
      redirect_to root_path
    end
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:email, :password) }
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:email, :password, :current_password) }
  end
end
