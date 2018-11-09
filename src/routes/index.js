import React from "react";
import Home from "../components";
import LoginPage from "../components/auth/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import registerUser from "../components/auth/registerUser";
import Article from "../components/articles/createArticle";
import NewPassword from "../components/auth/passwordReset/newPassword";
import ResetRequest from "../components/auth/passwordReset/passwordResetPage";
import ProtectedRoute from "./protectedRoutes";
import ViewArticles from "../components/articles/viewArticles";
import ViewArticle from "../components/articles/viewArticle";
import Rating from "../components/articles/rating";
import Profile from "../components/profile/profile";
import EditProfile from "../components/profile/editProfile";

const expressHistory = "pushState" in window.history;
export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter forceRefresh={expressHistory}>
        <Switch>
          <Route path="/" component={Home} exact strict />
          <Route path="/login" component={LoginPage} exact strict />
          <Route path="/register" component={registerUser} exact strict />
          <Route path="/password_reset" component={ResetRequest} exact strict />
          <Route path="/reset_confirm/:token" component={NewPassword} strict />
          <ProtectedRoute path="/create-article" component={Article} exact strict/>
          <Route path="/view-articles" component={ViewArticles} exact strict/>
          <Route path="/view-article/:slug" component={ViewArticle} exact strict/>
          <ProtectedRoute path="/rating" component={Rating} exact strict/>
          <ProtectedRoute path="/profile/:username" component={Profile} exact strict />
          <ProtectedRoute path="/profile/edit/:username" component={EditProfile} exact strict />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
