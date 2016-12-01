---
layout: user-doc
title: Assess the Health of Applications, Platforms and Clouds
id: "assess-health-applications-platforms-clouds"
---

# Solution

<video width="720" height="480" preload="metadata" controls="" class="grovo-video">
    <source src="http://videos.grovo.com/walmart-oneops-operate-and-monitoring-0215_view-a-summary-of-your-environment_4668.webm?vpv=1" type="video/webm">
    Your browser does not implement HTML5 video. 
</video>

To monitor the health of applications, platforms and clouds, follow these steps:

1. In the OneOps Dashboard, select the appropriate organization and assembly.
  
    ![Assess Health Dashboard](/assets/docs/local/images/assess-health-dashboard.png)
  
2. Click **Operate.**
  
    ![Assess Health Operate](/assets/docs/local/images/assess-health-operate.png)
  
    The Environments page displays.  
    ![Assess Health Environments](/assets/docs/local/images/assess-health-environments.png)
    
3. Select the environment.
     
    The Environments page defaults to the summary tab that displays a status for the following conditions:  

    * Platforms
    * Deployment
    * Health
    * Auto repair
     
    The health is displayed, including the number of instances in the environment. 

    * Good = green
    * Disabled = red       
    ![Assess Health Assessment](/assets/docs/local/images/assess-health-assessment.png)
       
4. Click the graph tab to display an overall view of the health of the application.
    
    ![Assess Health Graph](/assets/docs/local/images/assess-health-graph.png)
    
5. From the graph, view the overall health of the environment. 
  
    Each component is represented by a circle icon. The color of the icon indicates the component condition:
    
    * Green: The environment is healthy and no action needs to be taken.
    * Orange: A change is being executed. This could mean a deployment to that instance or that the instance is undergoing an auto repair.
    * Red: Click on a red-colored component to investigate. Drill down to see the status of the component.

# See Also

* <a href="/user/howto/control-environment.html">Control Your Environment Through Operations Video</a>

