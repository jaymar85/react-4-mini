import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../src/Components/Home/Home"
import TopicList from "../src/Components/TopicList/TopicList"
import Post from "../src/Components/Post/Post"

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={TopicList} />
        <Route path="/post/:id" component={Post}/>
    </Switch>
)
