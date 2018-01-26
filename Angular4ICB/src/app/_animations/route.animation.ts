import {
  trigger,
  transition,
  group,
  query,
  style,
  animate
} from "@angular/animations";
export const RouteAnimation = trigger("routeAnimation", [
  transition("* => *", [
    style({ height: "!" }),
    query(":enter", style({ transform: "translateX(100%)" })),
    query(
      ":enter, :leave",
      style({ position: "absolute", top: 0, left: 0, right: 0 }),
      { optional: true }
    ),
    // animate the leave page away
    group([
      query(
        ":leave",
        [
          animate(
            "0.3s cubic-bezier(.35,0,.25,1)",
            style({ transform: "translateX(-100%)" })
          )
        ],
        { optional: true }
      ),
      // and now reveal the enter
      query(
        ":enter",
        animate(
          "0.3s cubic-bezier(.35,0,.25,1)",
          style({ transform: "translateX(0)" })
        )
      )
    ])
  ])
]);
