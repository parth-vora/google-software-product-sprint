// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
  
    
    ArrayList<String> testStrings = new ArrayList(Arrays.asList("Hello, World!", "This is Parth!", "This is a message using JSON","Google SPS 2020"));
    response.setContentType("text/html;");
    response.getWriter().println("Hello Parth!");
    String json = convertToJson(testStrings);


    response.setContentType("application/json;");
    response.getWriter().println(json);
    
  } 

    private String convertToJson(ArrayList hello) {
    String json = "{";
    json += "\"firstWord\": ";
    json += "\"" + hello.get(0) + "\"";
    json += ", ";
    json += "\"secondWord\": ";
    json += "\"" + hello.get(1) + "\"";
    json += ", ";
    json += "\"thirdWord\": ";
    json += hello.get(2);
    json += ", ";
    json += "\"fourthWord\": ";
    json += hello.get(3);
    json += "}";
    return json;
  }
}
