import React from 'react';
import { browserHistory, Link } from 'react-router';

const SignIn = (props) => {
  j$(‘#dropdown-login’).click(function(e) {
   e.stopPropagation();
);
  return(
    <a class=”btn dropdown-toggle” data-toggle=”dropdown” href=”#”>Login<span class=”caret”></span></a>
<ul id=”dropdown-login” class=”dropdown-menu” style=”padding: 5px 10px 0px 10px;”>
   <%= form_for(“user”, :url => user_session_path) do |f| %>
      <li>
         <div class=”control-group”>
            <%= f.label :login, :class => “control-label” %>
            <div class=”controls”>
               <%= f.text_field :login %>
            </div>
         </div>
      </li>
      <li>
         <div class=”control-group”>
            <%= f.label :password, :class => “control-label” %>
            <div class=”controls”>
               <%= f.password_field :password %>
            </div>
         </div>
      </li>
      <li>
         <div class=”control-group”>
            <%= f.label :remember_me, :class => “control-label” %>
            <div class=”controls”>
               <%= f.check_box :remember_me %>
            </div>
         </div>
      </li>
      <li>
         <%= f.submit “Sign in”, :class => “btn btn-primary” %>
      </li>
   <% end %>
</ul>
  )
}

export default SignIn;
